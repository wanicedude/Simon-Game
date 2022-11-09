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

