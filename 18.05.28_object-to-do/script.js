var app = {
	variables: { // OBJ CONTAINING ALL DOM QUERIES
		getUserInput: document.getElementById('userInput'),
		getBtn: document.getElementById('addItemBtn'),
		getSectionBtn: document.querySelector('#addSection'),
		getRows: document.querySelectorAll('.row'),
		sectionInput: document.getElementById('sectionInput'),
		theDate: new Date()
	}, // END VARIABLE OBJ

	eventListeners: function() { // FUNC CONTAINING ALL EVENT LISTENERS
		// click section button to add new div
		app.variables.getSectionBtn.addEventListener('click', app.addSection, false);
		// click add item to add item to list
		app.variables.getRows[1].addEventListener('click', app.addListItem, false);
		// click list item to cross it out
		app.variables.getRows[1].addEventListener('click', app.crossOut, false);
	}, // END EVENTLISTENERS FUNC

	// *** ADD LIST ITEMS ***
	addListItem: function(e) { // FUNC THAT ADDS LIST ITEMS

		// get the UL closest to the button clicked
		var getNewUl = e.target.parentElement.parentElement.parentElement.children[2];
		// if what is clicked is a button, run code
		if (e.target.type === 'button') { // if-a START
			// if the closest input field is empty, do not run any code
			if (e.target.parentElement.parentElement.firstElementChild.value === '') { // if-b START
				// otherwise if the input field has text, take that text and add list item to UL
			} else {
				var newListItem = document.createElement('li'); // create list item
				newListItem.innerText = e.target.parentElement.parentElement.firstElementChild.value; // takes the value of input field and assigns it to new list item
				newListItem.setAttribute('class', 'list-item'); // assigns the class list-item to new list item
				getNewUl.append(newListItem); // places the list item at the end of Ul
			} // if-b END
		} // if-a END

	}, // *** END ADDLISTITEM FUNC ***

	// *** CROSSOUT LIST ITEM ***
	// Crosses out the list items when clicked on
	crossOut: function(e){
		// only run the code if the target (ie what is clicked on) it a list item
		if(e.target.className == 'list-item' || e.target.className == 'list-item line-thru') {
			// give what is targeted the class of line-thru
			e.target.classList.toggle('line-thru');
		} // if END

	}, // *** END CROSSOUT FUNC ***


	// *** ADD NEW DIV ***
	addSection: function() { // create new list section
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
			app.variables.getRows["1"].append(newSection); // places the new section into the second row of the DOM
			newSection.insertAdjacentHTML('beforeend', newLine); // inserts newLine as HTML into the new section
		} // if END

	} // addSection func END


} // ***** END APP OBJ *****

app.eventListeners();
