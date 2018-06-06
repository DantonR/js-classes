var app = {
	// ***** VARIABLES *****
	vars: {
		button: document.getElementsByName('submit')[0],
		imgChoice: document.getElementsByName('image')[0],
		bgChoice: document.getElementsByName('background')[0],
		fontChoice: document.getElementsByName('font')[0],
		borderChoice: document.getElementsByName('border')[0],
		messageChoice: document.getElementsByName('message')[0],
		currentText: document.querySelector('h1'),
		cardImage: document.querySelector('img'),
		bgColor: document.querySelector('.card'),
		fontFamily: document.querySelector('.sketch'),
		currentBorder: document.querySelector('.noBorder'),
	},
	// ***** END VARIABLES *****

	// ***** EVENT LISTENERS *****
	eventListeners: function() { // function containing all eventListeners
		app.vars.button.addEventListener('click', function(){ // the buttons click event
			event.preventDefault();
			app.cardChange( // the function that changes the card, using the different options to take as arguments
				app.vars.imgChoice,
				app.vars.bgChoice,
				app.vars.fontChoice,
				app.vars.borderChoice,
				app.vars.messageChoice
			);

		}, false);
	}, // end event listener func
	// ***** END EVENT LISTENERS *****

	// ***** METHODS *****
	cardChange: function(img, bg, fontFamily, borderType, message) { // the card change function, taking the paramaeters which will change the getElementsByName
		// * IMAGE CHANGE *
		app.vars.cardImage.src = 'assets/' + img.value + '.jpg' ; // take the image source and change the name to be the same as the image choice
		// * IMAGE CHANGE END *

		// * BG CHANGE *
		app.vars.bgColor.className = 'card ' + bg.value + 'Background'; // take the backgrounds class name and change it to be the same as the background color choice
		// * BG CHANGE END *

		// * FONT CHANGE *
		app.vars.fontFamily.className = font.value; // change the font to what the user chooses
		// * FONT CHANGE END *

		// * BORDER CHANGE *
		if (borderType.value === 'none') {
			app.vars.currentBorder.className = 'noneBorder';
		}
		else if (app.vars.borderChoice.value === 'thin') {
			app.vars.currentBorder.className = 'smallBorder';
		}
		else if (borderType.value === 'thick') {
			app.vars.currentBorder.className = 'bigBorder';
		}
		else if (app.vars.borderChoice.value === 'filled') {
			app.vars.currentBorder.className = 'filledBorder';
		} // if statement that changes the border depending on what the user chooses

		// * BORDER CHANGE END *

		// * MESSAGE CHANGE *
		if (app.vars.messageChoice.value === '') {
			alert('You should write a message!')
		} else {
			app.vars.currentText.textContent = app.vars.messageChoice.value;
		} // if the user doesn't enter anything the browser shows an alert, otherwise take the input and place it in the H1

	}
	// ***** END METHODS *****

} // --------------APP END--------------


app.eventListeners();
