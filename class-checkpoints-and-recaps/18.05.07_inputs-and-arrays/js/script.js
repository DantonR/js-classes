$(document).ready(function () {
    // var getOne =



    $('#quizCheckAnswers').click(function(){ // CLICK CHECK ANSWERS TO ADD THEM TO ARRAY
        event.preventDefault();
        var getHeading = document.getElementById('headingOne');
        // var answerOne = 1;
        // var answerTwo = 2;
        // var answerThree = 3;
        // var answerFour = 4;
        var correctAnswers = ['hello'];
        console.dir(correctAnswers);
        var allAnswers = [];

        var myArrayOne = [1];
        var myArrayTwo = [1];

        if (myArrayOne == myArrayTwo) {
            alert('yes');
        } else {
            alert('no');
        }
        var inputOne = document.getElementById('quizInputOne').value;
        var inputTwo = document.getElementById('quizInputTwo').value;
        var inputThree = document.getElementById('quizInputThree').value;
        var inputFour = document.getElementById('quizInputFour').value;

        // allAnswers.push(inputOne, inputTwo, inputThree, inputFour);
        allAnswers.push(inputOne);
        console.dir(allAnswers);

        if (allAnswers == correctAnswers) {
            getHeading.innerHTML = 'Well done!';
        } else {
            getHeading.innerHTML = 'Sorry, try again!';
        }




    }); //CHECK ANSWERS END

}); // DOCUMENT READ END




// DEAD CODE

// function checkAnswer (userAnswer) {
//     return userAnswer = false;
// }
//
// function wrongAnswer () {
//     getHeading.innerHTML = allAnswers.every(checkAnswer);
// }

// allAnswers.push(inputOne, inputTwo, inputThree, inputFour);
// // console.dir(allAnswers);
// var answerIndex = allAnswers.indexOf(inputTwo) + 1;
//
// if (inputTwo == answerTwo) {
//     getHeading.innerHTML = "Well done"
// } else {
//     getHeading.innerHTML = "Sorry, you got number " + answerIndex + " wrong."
// }


// console.dir(lastIndex);


// if (allAnswers[0] == answerOne && allAnswers[1] == answerTwo && allAnswers[2] == answerThree && allAnswers[3] == answerFour) {
//     console.log('Well Done!');
// } else {
//     function wrongAnswer(){
//
//     }
// }
// function checkAnswer (userAnswer) {
//     return userAnswer = false;
// }
//
// function wrongAnswer () {
//     getHeading.innerHTML = allAnswers.every(checkAnswer);
// }

// allAnswers.push(inputOne, inputTwo, inputThree, inputFour);
// // console.dir(allAnswers);
// var answerIndex = allAnswers.indexOf(inputTwo) + 1;
//
// if (inputTwo == answerTwo) {
//     getHeading.innerHTML = "Well done"
// } else {
//     getHeading.innerHTML = "Sorry, you got number " + answerIndex + " wrong."
// }


// console.dir(lastIndex);


// if (allAnswers[0] == answerOne && allAnswers[1] == answerTwo && allAnswers[2] == answerThree && allAnswers[3] == answerFour) {
//     console.log('Well Done!');
// } else {
//     function wrongAnswer(){
//
//     }
// }
