 var functionExpression = function(){
    var audioObj = new Audio('audio/lift-yourself-2.mp3');
    console.dir(audioObj);
    var kanye = document.getElementById("trigger");

    var init = function () {
        kanye.addEventListener('mouseover', playAudio, false);  
        kanye.addEventListener('mouseout', pauseAudio, false);
    }();

    function playAudio() {
        audioObj.play();
        kanye.src='img/hap.png';
    }

    function pauseAudio() {
        audioObj.pause();
        kanye.src='img/srs.png';
    }

}();
