$(document).ready(function () {
    var userName;
    var userAge;
    var userPet;
    var getHeading = (document).getElementById('headingOne');

    function getUserData () {
        userName = prompt('what is your name?');
        userAge = prompt('what is your age?');
        userPet = prompt('what kind of pet do you have');
    }

    getUserData();

    var userInfo = [userName, userAge, userPet];
    console.dir(userInfo);

    function printUserData () {
        (getHeading).innerHTML = userInfo[0] + ' ' + userInfo[1];
    }

    printUserData();
});
