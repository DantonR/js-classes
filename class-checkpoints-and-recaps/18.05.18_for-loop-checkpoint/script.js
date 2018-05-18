(function() {
    var getBoxes = document.querySelectorAll('.box');
    console.log(getBoxes);

    function changeBoxBg(boxProp, boxValue, boxPropTwo, boxValueTwo){
        for (var i = 0; i < 7; i++) {
            getBoxes[i].style[boxProp] = boxValue;
            getBoxes[i].style[boxPropTwo] = boxValueTwo;
        } // loop end
    }; // function end

    changeBoxBg('fontSize', '40px', 'fontFamily', 'Georgia');

    function addClassToBox(a, b, c, d){
        for (var i = 0; i < getBoxes.length; i++) {
            var boxText = getBoxes[i].innerText;

            if (boxText === a || boxText === b || boxText === c || boxText === d) {
                getBoxes[i].className = 'box' + ' ' + 'some-class'

            } // if statement END
        } // loop end
    } // function end


    addClassToBox('3', '5', '7', '11');

    var theArray = [11, 'a', 22, 'b', 55, 'c', 84, 'd', 101, 'something'];
    var storageArray = [];

    function removeNumbers(){
        for (var i = 0; i < theArray.length; i++) {

            if (typeof theArray[i] === 'number') {
                storageArray.push(theArray[i]);
                theArray.splice(i, 1);
            }
        }
        console.log(theArray);
        document.write('There are ' + storageArray.length + ' numbers!')
    };

    removeNumbers();
}());

// Make a DOM or HTML template that you can use to experiment with loops
// 1. Create a function that has a loop that changes the color of 7 elements in your document
//        a)  Make the function use an argument
// 2. Create another loop function that adds a classname to 4 elements within the dom. The classname should be 'some-class' and only one loop should be used. I.e you will need an array of 4 elements or more. Have some pre-made internal css that applies style via the added class.
// 3. Create a fuction that takes all of the numbers out of the following array. The same function should count the total numbers in the storage array and finally output them to the dom. Achieve all of this within 1 function.
//
//         var theArray = [11, 'a', 22, 'b', 55, 'c', 84, 'd', 101, 'something'];
