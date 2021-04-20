var buttons = document.querySelectorAll(".drum");
var numberIterations = document.querySelectorAll(".drum").length;
// buttons[i].addEventListener("click", function () { alert("Hello!!!"); });
// buttons[i].addEventListener("click", function () { var playSound = new Audio("sounds/tom-1.mp3"); playSound.play(); });
// buttons[i].addEventListener("click", function () { this.style.color = "yellow"; });
function playDrum(key) {
  switch (key) {

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;

    case "j":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;

    case "k":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;

    case "l":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;

    default: console.log("Keypress or click even :" + key);
  }
}

function buttonAnimation(key) {
  var buttonPressed = document.querySelector("." + key);
  if(buttonPressed != null){
    buttonPressed.classList.add("pressed");

    setTimeout(function() {
      buttonPressed.classList.remove("pressed");
    }, 100);
  }
}

for (var i = 0; i < numberIterations; i++) {

  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playDrum(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
      });
}

document.addEventListener("keydown", function (event) {
  playDrum(event.key);
  buttonAnimation(event.key);
});
