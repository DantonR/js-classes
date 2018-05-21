

(function() {
	var getEmailAddress = document.getElementById('exampleInputEmail1');
	var getPassword = document.getElementById('exampleInputPassword1');
	var getFormBtn = document.getElementById('formBtn');
	var getForm = document.querySelector('form');



	getFormBtn.addEventListener('click', function(){
		// console.log(myFunction()[0]);
		var userDataPrint = document.createElement('h2');
		userDataPrint.innerText = 'Welcome!';
		userDataPrint.setAttribute('class', 'animate-text--hidden')
		getForm.after(userDataPrint);
		var c = document.querySelector('.animate-text--hidden');
		setTimeout(function() {
			c.setAttribute('style', 'opacity: 1; transform: translateY(0px);')
		}, 200);
	}, false);


	function myFunction() {
		var userData = [];
		userData.push(getEmailAddress.value)
		userData.push(getPassword.value)
		return userData;
	};






	// document.getElementById('the-box').addEventListener('click', function () );
}());
