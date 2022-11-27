var dialogueZero = document.getElementById('Zero'); //carol
var dialogueOne = document.getElementById('One'); //malu
var dialogueTwo = document.getElementById('Two'); //ly
var dialogueThree = document.getElementById('Three'); //kamz
var dialogueFour = document.getElementById('Four'); //ana
var dialogueFive = document.getElementById('Five'); //malu
var dialogueSix = document.getElementById('Six');
var btn1 = document.getElementById('btn1');
var bg = document.getElementById('bg');

function nextZero() {
  dialogueZero.style.display = "none";
  dialogueOne.style.display = "inline-block";
}

function nextOne() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "inline-block";
}

function nextTwo() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "none";
    dialogueThree.style.display = "inline-block";
}

function nextThree() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "none";
    dialogueThree.style.display = "none";
    dialogueFour.style.display = "inline-block";
}

function nextFour() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "none";
    dialogueThree.style.display = "none";
    dialogueFour.style.display = "none";
    dialogueFive.style.display = "inline-block";
}

function endScene() {
    dialogueZero.style.display = "none";
    dialogueOne.style.display = "none";
    dialogueTwo.style.display = "none";
    dialogueThree.style.display = "none";
    dialogueFour.style.display = "none";
    dialogueFive.style.display = "none";
    bg.style.display = "none";
    btn1.style.display = "inline-block"

}