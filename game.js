// ==================== Step 2: Create a new pattern    ===========================

// Create an empty array
gamePattern = []


// Create a list of colours
buttonColours = ["red", "blue", "green", "yellow"]


// Create a function that generates random number between 0 and 3
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4) ;
    return randomNumber;
}


// assign random colour
randomChosenColour = buttonColours[nextSequence()]

// push random color to gamePattern
gamePattern.push(randomChosenColour)

3198286289



// ==================== Step 3: Show the Sequence to the User with Animations and Sounds    ===========================

 var buttonColour = $("#" + randomChosenColour).fadeIn(105).fadeOut(105).fadeIn(105);
//  console.log(buttonColour);
// Play Sounds


var audio = new Audio('audio_file.mp3');
audio.play();

function makeSound (num){
    if (num[0] === "blue"){
        var blue = new Audio("sounds/blue.mp3");
        blue.play();
        console.log(num[0])
    }else if (num[0] === "green"){
        var green = new Audio("sounds/green.mp3");
        green.play();
        console.log(num[0])
    }else if (num[0] === "red"){
        var red = new Audio("sounds/red.mp3");
        red.play();
        console.log(num[0])
    }
    else if (num[0] === "yellow"){
        var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
        console.log(num[0])
    }

}
console.log(gamePattern[0])
makeSound(gamePattern)
            











// $("button#red").ready(() => {
//     setInterval(() => {
//         $('p').fadeIn();
//         $('p').fadeOut();
//     }, 500);
// });

// $(document).ready(function (){
//     setInterval(() => {
//         $("button#red").fadeIn();
//         $("button#red").fadeOut;
//     }, 500);
// })


// var i;
// for (i = 0; i < 5; i++){
//     var butt = document.querySelectorAll(".row div");
//     var butt1 = $(butt).attr("#id")
//     console.log(butt1)
// }

