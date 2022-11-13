// ==================== Step 2: Create a new pattern    ===========================

// Create a list of colours
buttonColours = ["red", "blue", "green", "yellow"];

// Create a function that generates random number between 0 and 3
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

// assign random colour
randomChosenColour = buttonColours[nextSequence()];

// push random color to gamePattern
gamePattern.push(randomChosenColour);

// 3198286289

// ==================== Step 3: Show the Sequence to the User with Animations and Sounds    ===========================

var buttonColour = $("#" + randomChosenColour)
  .fadeIn(105)
  .fadeOut(105)
  .fadeIn(105);

if (gamePattern[0] === "blue") {
  var blue = new Audio("sounds/blue.mp3");
  blue.play();
} else if (gamePattern[0] === "green") {
  var green = new Audio("sounds/green.mp3");
  green.play();
} else if (gamePattern[0] === "red") {
  var red = new Audio("sounds/red.mp3");
  red.play();
} else if (gamePattern[0] === "yellow") {
  var yellow = new Audio("sounds/yellow.mp3");
  yellow.play();
}

// // ================================ Step 4 - Check Which Button is Pressed  ===============================

// Create an empty array
var userClickedPattern = [];

// 1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id"); // 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  userClickedPattern.push(userChosenColour);
});

// Step 5 - Add Sounds to Button Clicks

// 1. In the same way we played sound in nextSequence() , when a user clicks on a button, 
// the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.


$(".btn").click(function (){
    var eventt = $(this).attr("id");
    if (eventt=== "blue"){
        var blue = new Audio("sounds/blue.mp3");
        blue.play();
        console.log($(event))
    } 
    else  if (eventt === "green"){
        var green = new Audio("sounds/green.mp3");
        green.play();
    }
    else  if (eventt === "red"){
        var red = new Audio("sounds/red.mp3");
        red.play();
    }
    else  if (eventt === "yellow"){
        var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
    }
})