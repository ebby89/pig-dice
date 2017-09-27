//Business Logic Here

//Constructor for each player --- Takes player name, and tracks their rolls, turn scores, and total score.
function Player(name, initialRoll, turnScore, totalScore) {
  this.name = "Player 1";
  this.initialRoll = 0;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

//Generate a random roll 1-6
Player.prototype.roll = function() {
  return this.initialRoll = Math.floor(Math.random() * 6) + 1;
}

//Display which player and the number rolled
Player.prototype.details = function() {
  return this.name + ", you rolled: " + this.initialRoll;
}

//Add each roll during a single turn
Player.prototype.addRolls = function() {
  var turnScore = 0; //Each turn starts at score = 0
  if (this.initialRoll === 1) {
    turnScore = 0; //If player rolls a 1, then that turn's score = 0
  }
  else {
    turnScore = 0;  //If player rolls 2-6, then that turn's score = sum of all rolls during that turn
  }
  return turnScore; //Display total score for one turn
};

//save initial roll in turnscore --> then add initial roll to turnscore --> repeate for each initial roll.

//UI Logic Here
$(document).ready(function(){
  $("#pOneRoll").click(function(){
    //Variables in the player constuctor
    var name;
    var initialRoll;
    var turnScore;
    var totalScore;
    var newPlayer = new Player(name, initialRoll, turnScore, totalScore);
    //Variables to display in output
    var displayRoll = newPlayer.roll();
    var details = newPlayer.details();

    console.log(details);
    $("#pOneRollDisplay").text(displayRoll);
    $("#pOneDetails").text(details);
  });
});
