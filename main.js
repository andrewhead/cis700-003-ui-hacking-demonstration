// This is a comment
window.addEventListener("load", function() {
    // Setting background color (or other styles) from JavaScript takes precedence over setting styles from CSS.
    document.body.style.backgroundColor = "lightblue";

    var paragraph = document.querySelector("p#second-paragraph");
    /* 
     * Search for "MDN HTMLElement API"
    */
    console.log("Hello from the JavaScript console!");
    console.log(paragraph);
    paragraph.style.backgroundColor = "yellow";

    /*
     * This code creates a button element,
     * and then it appends (i.e., adds) it to the <body> of the document. Append = add to the end of the list of child elements.
    */
    var newButton = document.createElement("button");
    document.body.appendChild(newButton);

    /*
    var myCodeMirror = CodeMirror(document.body, {
        value: "function myScript(){return 100;}\n",
        mode:  "javascript",
        viewportMargin: Infinity,
    });
    */
    var myTextArea = document.querySelector("textarea#codemirror-text-area");
    var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
        // value: "function myScript(){return 100;}\n",
        mode:  "javascript",
        // viewportMargin: Infinity,
    });

    var handle = document.querySelector("#code-editor-handle");
    var codeEditorContainer = document.querySelector("#code-editor-container");
    // handle.addEventListener("click", function() {
    //     console.log("The handle was clicked.");
    //     // var codeEditorContainer = document.querySelector("#code-editor-container");
    //     codeEditorContainer.style.left = "150px";
    //     codeEditorContainer.style.top = "200px";
    // });

    var isMouseDown = false;
    document.body.addEventListener("mousedown", function(event) {
        console.log("1. User pressed down the mouse.");
        isMouseDown = true;
    });
    document.body.addEventListener("mousemove", function(event) {
        if (isMouseDown) {
            console.log("2. User moved the mouse.");
            var newX = event.x;
            var newY = event.y;
            codeEditorContainer.style.left = newX;
            codeEditorContainer.style.top = newY;
        }
    });
    document.body.addEventListener("mouseup", function(event) {
        console.log("3. User lifted the mouse.");
        isMouseDown = false;
    });

    console.log(myCodeMirror);
});
