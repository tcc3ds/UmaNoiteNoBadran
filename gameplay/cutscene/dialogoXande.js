var dialogueZero = document.getElementById('ZeroX');
var dialogueOne = document.getElementById('OneX');
var dialogueTwo = document.getElementById('TwoX');
/*var dialogueThree = document.getElementById('ThreeX');
var dialogueFour = document.getElementById('FourX');
var dialogueFive = document.getElementById('FiveX');
var dialogueSix = document.getElementById('SixX');*/

var modal = document.getElementById("myModal");

function nextZeroX() {
  dialogueZero.style.display = "none";
  dialogueOne.style.display = "inline-block";
}

function nextOneX() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "inline-block";
}

/*
function nextTwoX() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "none";
    dialogueThree.style.display = "inline-block";
}

function nextThreeX() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "none";
    dialogueThree.style.display = "none";
    dialogueFour.style.display = "inline-block";
}

function nextFourX() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "none";
    dialogueThree.style.display = "none";
    dialogueFour.style.display = "none";
    dialogueFive.style.display = "inline-block";
}*/

function endScene() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "none";

    modal.style.display = "inline-block";
}