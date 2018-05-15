(function() {
    // FIRST CONTENT VARIABLES

    var contentFirst = document.querySelector('.content__first'); // This creates a variable for the first content section to be used.
    console.dir(contentFirst.childNodes); // Creates a list for all children within the first content section. This can then be referenced in order to select specific children.

    // FIRST CONTENT END


    // SECOND CONTENT VARIABLES
    var contentSecond = document.querySelector('.content__second');
    var smallTextParent = document.getElementsByClassName('sans-serif');
    var smallText = smallTextParent[0];
    console.dir(contentSecond.childNodes);
    console.dir(smallText);
    // SECOND CONTENT END

    // THIRD CONTENT VARIABLES
    var contentThird = document.querySelector('.content__third');
    var oswald = document.querySelector('.oswald');
    console.dir(contentThird.childNodes);
    // THIRD CONTENT END


    var init = function(){ // The init function is used to contain all of the event listeners (click events for the buttons)

        // 1ST
        contentFirst.childNodes[7].addEventListener('click', changeToHelvetica, false); // Here we are taking the 8th child node of contentFirst, which is a button, and running the function changeToHelvetica when it is clicked.
        contentFirst.childNodes[9].addEventListener('click', changeToAveria, false);
        contentFirst.childNodes[11].addEventListener('click', changeToGodAwful, false);
        // 1ST END

        // 2ND
        contentSecond.childNodes[3].addEventListener('click', changeToSmall, false);
        contentSecond.childNodes[5].addEventListener('click', changeToMedium, false);
        contentSecond.childNodes[7].addEventListener('click', changeToLarge, false);
        // 2ND END

        // 3RD
        contentThird.childNodes[3].addEventListener('click', rotateOswald, false);
        contentThird.childNodes[5].addEventListener('click', skewOswald, false);
        contentThird.childNodes[7].addEventListener('click', snazOswald, false);
        // 3RD END
        }();




    // 1ST FUNCTIONS
    function changeToHelvetica() {
        contentFirst.firstElementChild.outerHTML = "<h1 class='serif serif--heading' style='font-family: Helvetica; font-weight: 900;'>THE OUTSIDER</h1>"; // this is taking the first element child of contentFirst and editing the styling within the html.
        contentFirst.childNodes[3].style.fontFamily = 'Helvetica'; // this is taking the 4th child node of contentFirst and changing the property fontFamily (which is inside of style)
        contentFirst.childNodes[5].style.fontFamily = 'Helvetica';
    };
    function changeToGodAwful() {
        contentFirst.firstElementChild.style.fontFamily = 'Papyrus'
        contentFirst.childNodes[3].style.fontFamily = 'Comic Sans MS';
        contentFirst.childNodes[5].style.fontFamily = 'Comic Sans MS';
    };
    function changeToAveria() {
        contentFirst.firstElementChild.style.fontFamily = 'Averia Serif Libre'
        contentFirst.childNodes[3].style.fontFamily = 'Averia Serif Libre';
        contentFirst.childNodes[5].style.fontFamily = 'Averia Serif Libre';
    };
    // 1ST FUNCTION END


    // 2ND FUNCTIONS
    function changeToSmall() {
        smallText.style.fontSize = '1rem';
        smallText.textContent = "Small";
    }
    function changeToMedium() {
        smallText.style.fontSize = '3.6rem';
        smallText.textContent = "Medium";
    }
    function changeToLarge() {
        smallText.style.fontSize = '9.2rem';
        smallText.textContent = "Large";
    }
    // 2ND FUNCTIONS END

    // 3RD FUNCTIONS
    function rotateOswald() {
        oswald.textContent = 'better';
        oswald.classList.add('oswald--rotated');
        oswald.classList.remove('oswald--skewed');
        oswald.classList.remove('oswald--snazzed');
    }
    function skewOswald() {
        oswald.textContent = 'snazzy';
        oswald.classList.add('oswald--skewed');
        oswald.classList.remove('oswald--snazzed');
    }
        function snazOswald() {
        oswald.textContent = 'snazziest';
        oswald.classList.add('oswald--snazzed');
        }
    // 3RD FUNCTIONS END



}());
