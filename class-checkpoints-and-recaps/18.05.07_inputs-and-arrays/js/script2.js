(function(){

})();


$(document).ready(function () {
    // var getOne =


    $('.circle').click(function(){
        console.log('work');
        $('.circle').addClass('circle--grow');
    });


var functionExpression = function () {
    var a = 100;
    return a;
}

console.log();
var getA = functionExpression();
console.console.log(getA);

    $('#quizCheckAnswers').click(function(){ // CLICK CHECK ANSWERS TO ADD THEM TO ARRAY
        event.preventDefault();
        var getHeading = document.getElementById('headingOne');

        var correctAnswers = ['hello'];
        var answerOne = 'Next';
        var allAnswers = [];

        var inputOne = document.getElementById('quizInputOne').value;

        // var qThree = window.prompt('What font is the heading using');

        if (inputOne == answerOne) {
            getHeading.innerHTML = 'Correct!';
            var promptOne = prompt('Who wrote the book 1984');
            var promptTwo = prompt('What is the name of the second Lord of the Rings movie?');
            var promptThree = prompt('Who was the first to successfully climb Mount Everest?');
            allAnswers.push(promptOne, promptTwo, promptThree);
            getHeading.innerHTML = 'Nice! Your answers were: ' + allAnswers[0] + ', ' + allAnswers[1] + ', and ' + allAnswers[2] + '.';
        } else {
            getHeading.innerHTML = 'Try again!';
        }


    }); //CHECK ANSWERS END

}); // Document Ready ENDS
