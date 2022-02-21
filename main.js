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
        value: "function myScript(){return 100;}\n",
        mode:  "javascript",
        viewportMargin: Infinity,
    });
});
