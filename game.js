// // ==================== Step 2: Create a new pattern    ===========================

// // Create a list of colours
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;  // Level 0 is the start of the game
var gameStart =  true;


// // // ================================ Step 4 - Check Which Button is Pressed  ===============================
// // 1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

$(".btn").click(function ( ) {
  var userChosenColour = $(this).attr("id"); // 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1)

});

// // Step 7 - Start the Game
// // 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence()
// 2. Create a new variable called level and start at level 0.

$(document).keypress(function(){
    if (gameStart === true){
        $("#level-title").text($("#level-title").text().replace("Press A Key to Start", "Level  " + level));
        // $("#level-title").text("Level " + level);
        nextSequence();
        gameStart = false;

    }
})


// // Step 8 - Check the Answer against the Game Sequence

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
        playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}




// // Create a function that generates random number between 0 and 3

function nextSequence() {
    userClickedPattern = [];
    level +=1;
    $("#level-title").text($("#level-title").text().replace("Press A Key to Start", "Level  " + level));
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    // // ==================== Step 3: Show the Sequence to the User with Animations and Sounds    ===========================
    $("#" + randomChosenColour).fadeIn(105).fadeOut(105).fadeIn(105);
    playSound(randomChosenColour);
}

// // Step 5 - Add Sounds to Button Clicks

// // 1. In the same way we played sound in nextSequence() , when a user clicks on a button, 
// // the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }


// Step 6 - Add Animations to User Clicks

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
        setTimeout(function(){
            $(this).removeClass("pressed");
        }, 100);
}

