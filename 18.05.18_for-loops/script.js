(function() {
	//	FOR LOOP BASICS
	// var myArray= ['a', 'b', 'c', 'd', 'e'];
	// // var body = document.querySelector('body')
	// for (var i = 0; i < myArray.length; i++) {
	// 	console.log( i + ' counter');
	// 	myArray[i];
	// }
	//	FOR LOOP BASICS END


	// VARIABLES
	var myArray= ['a', 'b', 'c', 'd', 'e', 'a', 'a', 'a', 1, 55, true, 'a', 'b', 'z'];
	var listItems = document.querySelectorAll('li');


	// FOR LOOP USING ARRAY LENGTH
	// function loopListItems(){
	// 	for (var i = 0; i < listItems.length; i++) {
	// 		listItems[i].style.color = 'pink';
	// 		listItems[i].style.fontSize = '28px';
	// 	}
	// }
	// loopListItems();


	// FOR LOOP USING NUMBER
	// var loopThreeListItems = function(){ // FUCNTION START
	// 	// FOR LOOP START
	// 	for (var i = 0; i < 3; i++) {
	// 		listItems[i].style.color = 'blue';
	// 		listItems[i].style.fontSize = '12px';
	// 	}
	// 	// FOR LOOP END
	//
	// }(); // FUNCTION END

	// USING ARRAYS & FOR LOOPS TO STORE
	console.log(myArray[1])
	var storageArray = [];


	function usingArraysToStore () {

		for (var i = 0; i < myArray.length; i++) {
		console.log(myArray[i]);
			if (myArray[i] === 'a') {
				console.log(myArray[i]);
				storageArray.push(myArray[i]);
			} // If statement ends

		} // for loop ends
		console.log(storageArray);
	} // usingArraysToStore function End
	usingArraysToStore();
	console.log('I count ' + storageArray.length + ' a\'s in total');
}());
