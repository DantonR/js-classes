// A. // 1 Create a function that copies all of the items (not prices) to a new array
// 2 Then re-order the array alphabetically
// 3 Try to make the function use an argument that references the array name

// B. // 1 Create another function that takes all of the prices (not items) and assigns
// them to a new myArray
// 2. Re-order the new array numerically from lowest to highest
// 3 Try to make the function use an argument that references the array name



(function() {

	var shoppingCart = [
	  {item: `soap`, price: 4.99},
	  {item: `hammer`, price: 19.60},
	  {item: `tissues`, price: 2.95},
	  {item: `chocolates`, price: 5.95},
	  {item: `fruit`, price: 27.60},
	  {item: `oil`, price: 80.95},
	  {item: `tv`, price: 220.00},
	  {item: `phone`, price: 100.60},
	  {item: `meat`, price: 12.95}
	];

	var storageArray = []; // create empty array to push data into
	var storePriceArray = [];
	var getLeftList = document.querySelector('.list-one');
	var getRightList = document.querySelector('.list-two');
	console.dir(getLeftList);
	console.log(storageArray);





	function pushItemNames (itemArray, emptyArray) { // the function takes two parameters -- what is the array it is taking from, and what array it is pushing to
		for (var i = 0; i < itemArray.length; i++) {
			emptyArray.push(itemArray[i].item) // this is the method that pushes the item into the empty array
		} // loop END

		storageArray.sort(); // JS method that sorts the array into alphabetical order
	}; // func pushItemNames END

	pushItemNames(shoppingCart, storageArray);
	console.log(storageArray);

	function pushPrices(itemArray, emptyArray)  {
		for (var i = 0; i < itemArray.length; i++) {
			emptyArray.push(itemArray[i].price)
		} // loop END
		emptyArray.sort(function(a, b){return a-b});
	};


	pushPrices(shoppingCart, storePriceArray);
	console.log(storePriceArray);

	for (var i = 0; i < storePriceArray.length; i++) {
		getLeftList.children[i].innerText = storageArray[i]
	}
	for (var i = 0; i < storePriceArray.length; i++) {
		getRightList.children[i].innerText = storePriceArray[i]
	}

}());
