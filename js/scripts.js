//Business Logic Here

//Constructor for each player --- Takes player name, and tracks their rolls, turn scores, and total score.
function Player(name) {
  this.name = name;
  this.rollDie = 0;
  this.roundScore = 0;
  this.totalScore = 0;
}

//Generate a random roll 1-6
Player.prototype.roll = function() {
  return this.rollDie = Math.floor(Math.random() * 6) + 1;
}

//Add roll score to turn score
Player.prototype.addRolls = function() {
  if (this.rollDie === 1) {
    this.roundScore = 0;
  }
  else {
    this.roundScore += this.rollDie;
  }
}

//Hold a roundScore
Player.prototype.hold = function() {
  this.totalScore += this.roundScore;
  this.roundScore = 0; //Reset roundScore to 0 for next turn (does NOT reset totalScore!)
  return "Your total score: " + this.totalScore; //shows total score on hold, need to display proper
}

//Display which player and the number rolled
Player.prototype.details = function() {
  return "Points this Round = " + this.roundScore + "!";
}


//UI Logic Here
$(document).ready(function(){
//Variables in the player constuctor (instances of Player object)
  var newPlayer = new Player("Player 1");
  var newPlayer2 = new Player("Player 2");

//Click Player 1 ROLL
  $("#pOneRoll").click(function(){
    var displayRoll = newPlayer.roll();
    newPlayer.addRolls(); //Call .addRolls method on newPlayer
    var details = newPlayer.details();

    $("#pOneRollDisplay").text(displayRoll);
    $("#pOneScores").text(details);
  });

//Click Player 2 ROLL
  $("#pTwoRoll").click(function(){
    var displayRoll = newPlayer2.roll();
    newPlayer2.addRolls(); //Call .addRolls method on newPlayer2
    var details = newPlayer2.details();

    $("#pTwoRollDisplay").text(displayRoll);
    $("#pTwoScores").text(details);
  });

//Click HOLD
  $(".hold").click(function(){
    var playerOneHold = newPlayer.hold();
    $("#pOneScoreRight").text(playerOneHold);

    var playerTwoHold = newPlayer2.hold();
    $("#pTwoScores").text(playerTwoHold);

  });
});
