var app = {
	propertyTest: 'Danton Ruthe',

	config: {
		settingA: true,
		language: 'en',
		colorSchemeA: 'blue',
		colorScemeB: 'red'
	},

	saySomething: function () {
		console.log('Where in the world is ' + app.propertyTest + ' today?')
	},

	init: function() {
		app.config.settingA = false;
		app.saySomething();
		console.log(app.config.settingA);
		console.log(this);
	},

	argumentMethod: function(updater){
		app.config.colorSchemeA = updater;
		console.log(this.config.colorSchemeA);
	}
};

app.argumentMethod('pink');
console.log(app.init());
