(function() {
    var body = document.querySelector('main'); // This takes the 'main' element from the DOM and assigns it to the variable 'body'
    var newP = document.createElement('p'); // This creates an paragraph element, and assigns it to the variable 'newP'

    newP.innerText = "I tried to find the rhythm of the world where I used to live. I followed the current. I was silent, attentive, I made a conscious effort to smile, nod, stand, and perform the millions of gestures that constitute life on earth"; // This takes the newP element and changes its innerText property ie. in between the <p> tags

    newP.setAttribute('style', 'font-size: 24px; color: #333; font-family: Helvetica; border: 1px solid blue; padding: 15px; border-radius: 10px; max-width:500px; margin: 0 auto;'); // Takes the newP and uses the method setAttribute, which allows the changing of all the styling


    body.after(newP); // Places the new paragraph after body, using the 'after' method.

    function createBoxFunction(boxWidth, boxHeight, boxBgColor){ // creates a new function that takes three different parameters
        var createBox = document.createElement('div'); // creates a new 'div' element, assigns it to 'createBox'
        createBox.style.width = boxWidth; // allows width property to be changed depending on what argment passes through for the 'boxWidth' parameter
        createBox.style.height = boxHeight; // **
        createBox.style.background = boxBgColor; // **
        createBox.style.margin = '10px auto'; // changes the margin property of the new div/box
        newP.after(createBox); // uses the 'after' method to place the new div/box after the new paragraph
    }

    createBoxFunction('500px', '100px', 'red'); // calls the createBoxFunction, taking in 500px for boxWidth, 100px for boxHeight, and red for boxBgColor




}());
