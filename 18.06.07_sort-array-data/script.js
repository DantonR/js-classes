(function() {
	var theArray = [false, 'adam', 'sam', 15, 'bob', 'john', 9000, 'tupac', 'biggie', 'george', 'tony', 22]

	// ***** PART ONE *****
	function changeArray(){
		for (var i = 0; i < theArray.length; i++) {

			if (typeof theArray[i] != 'string') {
				theArray.splice(i, 1);
			} // if end

		} // for end

		theArray.push('billy');
		theArray.sort();
		console.log(theArray);
	}; // changeArray end

	// changeArray();
	// **** PART ONE END *****


	// ***** PART TWO *****
	var arr = ['fish', 'tigers', 'llamas', 'cats', 'goats', 'tigers', 'horses'];
	var logicSwitch = false;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'tigers') {
			logicSwitch = true;
			// console.log('run!');
		} // if end
		arr[i];
	} // for end

	// SCAN ARRAY TO SEE IF ITEM EXISTS
	// var sayWhat = arr.indexOf('tigers') != -1;

	// FIND THE INDEX OF A PARTICULAR ITEM
	var sayWhat = arr.indexOf('tigers');
	console.log(sayWhat);

	// ***** PART TWO END *****
}());
