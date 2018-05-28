(function() {
	// MAIN VARIABLES
	var getUserInput = document.getElementById('userInput');
	var getBtn = document.getElementById('addItemBtn');
	var getSectionBtn = document.getElementById('addSection');
	var getRows = document.querySelectorAll('.row');
	var container = document.getElementsByClassName('row');
	var sectionInput = document.getElementById('sectionInput');

	var d = new Date();
	document.getElementsByClassName('header__date')[0].innerText  =  d;

	// MAIN VARIABLES END
	console.dir(container);
	console.dir(sectionInput);
	console.dir(getRows);


	var init = function(){
		getSectionBtn.addEventListener('click', addSection, false);
		container[1].addEventListener('click', addListItem, false);
		container[1].addEventListener('click', crossOut, false);
		// container[0].addEventListener('keypress', deleteItem, false);
	}();

	function addListItem(e){ // Creates and appends list item into UL
		console.dir(e.target.parentElement.parentElement.firstElementChild.value);
		var getNewUl = e.target.parentElement.parentElement.parentElement.children[2]; // ul field to place new items into
		if (e.target.type === 'button') { // if-a START
			if (e.target.parentElement.parentElement.firstElementChild.value === '') { // if-b START
				// no value inside input field therefore do no run code
			} else {
				var newListItem = document.createElement('li'); // create list item
				newListItem.innerText = e.target.parentElement.parentElement.firstElementChild.value; // takes the value of input field and assigns it to new list item
				newListItem.setAttribute('class', 'list-item'); // assigns the class list-item to new list item
				getNewUl.append(newListItem); // places the list item at the end of Ul
			} // if-b END

		} // if-a END

	}; // addListItem END function

	function crossOut(e) { // Crosses out the list items when clicked on
		if(e.target.className == 'list-item' || e.target.className == 'list-item line-thru') { // only run the code if the target (ie what is clicked on) it a list item
			e.target.classList.toggle('line-thru'); // give what is targeted the class of line-thru
		}

	} //crossOut func END


	function addSection() { // create new list section
		if (sectionInput.value === '') {
			// if input value is empty, do not run any code
		} else {
			var newSection = document.createElement('div'); // create new div
			var newLine = '<div class="list-section">'; // creates new variable which contains text for HTML
			newLine += '<h2>'; // adds onto the HTML of 'newLine'
			newLine += sectionInput.value; // Takes the input value and places between the html of newLine
			newLine += '</h2>';
			newLine += '<hr class="list-section__rule">';
			newLine += '<ul>';
			newLine += '</ul>';
			newLine += '<div class="input-group mb-3">';
			newLine += '<input type="text" class="form-control" placeholder="What do you need done?" id="userInput">';
			newLine += '<div class="input-group-append">';
			newLine += '<button class="btn btn-outline-secondary" type="button" id="addItemBtn">Add item</button>';
			newLine += '</div>';
			newLine += '</div>';
			newLine += '</div>';
			newSection.setAttribute('class', 'col-md-4'); // adds the class of col-md-4 to the new section
			getRows["1"].append(newSection); // places the new section into the second row of the DOM
			newSection.insertAdjacentHTML('beforeend', newLine); // inserts newLine as HTML into the new section
		} // if END

	} // addSection func END














}()); //iife END
