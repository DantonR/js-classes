(function() {
	var getBoxes = document.querySelectorAll('.box');
	var userForm = document.querySelector('form');
	var changeStyleBtn = userForm.childNodes['9']
	console.dir(userForm);
	console.dir(getBoxes[3].childNodes["0"].nodeValue);
	console.dir(getBoxes);

	function callLoop(letter, value){
		for (var i = 0; i < getBoxes.length; i++) {
			var getBoxByLetter = getBoxes[i].childNodes["0"].nodeValue;

			if (getBoxByLetter === letter) {
				getBoxes[i].style.background = value;
			} // if statement ENDS*


		} // for loop ENDS*

	}; // callLoop function ENDS*

	changeStyleBtn.addEventListener("click", function(){
		callLoop(userForm.childNodes[3].value, userForm.childNodes[7].value);
	}, false);


}()); // IIFE ENDS*








// Make a DOM or HTML template that you can use to experiment with loops
// 1. Create a function that has a loop that changes the color of 7 elements in your document
//        a)  Make the function use an argument
// 2. Create another loop function that adds a classname to 4 elements within the dom. The classname should be 'some-class' and only one loop should be used. I.e you will need an array of 4 elements or more. Have some pre-made internal css that applies style via the added class.
