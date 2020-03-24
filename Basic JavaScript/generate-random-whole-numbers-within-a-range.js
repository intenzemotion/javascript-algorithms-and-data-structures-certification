// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line

function randomRange(myMin, myMax) {

  var randomBetween7and9 = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

  return randomBetween7and9; // Change this line

}

var myRandom = randomRange(7, 9); // inclusive 7, 8, 9