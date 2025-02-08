// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
   var oldRandom = random;
   if (nextRandom > oldRandom) {
    alert("The number is bigger!");
   }else {
    alert("The number is not bigger!")
   }
   generateRandom();
}


// Function for the lower button
function lower() {
   var oldRandom = random;
   if(nextRandom < oldRandom) {
    alert("The number is smaller!")
   }else {
    alert("The number is not smaller!")
   }
   generateRandom();
}

//Generate a number to start the game!
generateRandom();

