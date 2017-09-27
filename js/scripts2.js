//Constructor for each player --- Takes player name, and tracks their rolls, turn scores, and total score.
function Player(name, initialRoll, turnScore, totalScore) {
  this.name = "Player 1";
  this.initialRoll = Math.floor(Math.random() * 6) + 1;
  this.turnScore = [];
  this.totalScore = 0;
}



function addScore(initialRoll, turnScore) {
  for (var i = 0; i < 1; i++) {
    Player.initialRoll.push(Player.turnScore);
  } return;
}

// //Generate a random roll 1-6
// Player.prototype.roll = function() {
//   for (var i = 0; i < 1; i++) {
//     if (this.initialRoll === 1) {
//       this.turnScore.push(0); //If player rolls a 1, then that turn's score = 0
//     }
//     else {
//       this.turnScore.push(this.initialRoll);  //If player rolls 2-6, then that turn's score = sum of all rolls during that turn
//     }
//   }
//   return; //Display total score for one turn
// };




//Display which player and the number rolled
Player.prototype.details = function() {
  return this.name + ", you rolled: " + this.initialRoll + " Score: " + this.turnScore;
}



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
    var displayRoll = Player.addScore;
    var details = newPlayer.details();


    $("#pOneRollDisplay").text(displayRoll);
    $("#pOneDetails").text(details);
  });
});
