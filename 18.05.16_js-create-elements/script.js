// MAKING AN ELEMENT WITH JS

// Get the element you want to add your new element before or after
var gimmeH4 = document.querySelector('h4');

// Create the new element
// This can be any valid HTML element: p, article, span, etc...
var p = document.createElement('p');

// Add content to the new element
// p.innerText = 'This is brand new and made with js!';
//
// // Insert the new node before the reference node
// gimmeH4.after(p);
//
// // p.style.color = 'green';
// // p.style.fontSize = '90px';
//
// p.setAttribute('id', 'idName');
// p.setAttribute('class', 'some-class')
// p.setAttribute('style', 'font-size: 44px; font-style: italic; color: pink;')


(function() {

    var getBtn = document.querySelector('#button');
    var domForm = document.querySelector('form');
    var getInputVal = document.querySelector('#userInput').value;

    getBtn.addEventListener("click", function(){
        var getInputVal = document.querySelector('#userInput').value;
        addContent(getInputVal);
    }, false);


    function addContent(textContent) {
        console.log(textContent);
        var createText = document.createElement('p');
        createText.innerText = textContent;
        console.log(createText.innerText);
        domForm.after(createText);
    };
}());
