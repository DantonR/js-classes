var app = {
	// ***** VARIABLES *****
	vars: {
		button: document.getElementsByName('submit')[0],
		imgChoice: document.getElementsByName('image')[0],
		bgChoice: document.getElementsByName('background')[0],
		fontChoice: document.getElementsByName('font')[0],
		borderChoice: document.getElementsByName('border')[0],
		messageChoice: document.getElementsByName('name')[0],
		cardImage: document.querySelector('img'),
		bgColor: document.querySelector('.card'),
		fontFamily: document.querySelector('.sketch'),
		currentBorder: document.querySelector('.noBorder'),
		// brdrClass: app.vars.currentBorder.className,
	},
	// ***** END VARIABLES *****

	// ***** EVENT LISTENERS *****
	eventListeners: function() { // function containing all eventListeners
		app.vars.button.addEventListener('click', function(){
			event.preventDefault();
			app.cardChange(
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
	cardChange: function(img, bg, fontFamily, borderType, message) {
		// * IMAGE CHANGE *
		app.vars.cardImage.src = 'assets/' + img.value + '.jpg' ;
		// * IMAGE CHANGE END *

		// * BG CHANGE *
		app.vars.bgColor.className = 'card ' + bg.value + 'Background';
		// * BG CHANGE END *

		// * FONT CHANGE *
		app.vars.fontFamily.className = font.value;
		// * FONT CHANGE END *

		// * BORDER CHANGE *
		// if (app.vars.currentBorder.className === 'none') {
		// 	app.vars.currentBorder.className = 'noneBorder';
		// } else if () {
		//
		// }

		// * BORDER CHANGE END *
	}
	// ***** END METHODS *****
}

console.dir(app.vars);
console.dir(app.vars[Object.keys(app.vars)[1]]);
app.eventListeners();
console.dir(app.vars.currentBorder.className);
// console.dir(app.vars.cardImage);
