timer();
var p1Score=0;
var p2Score=0;
var currentPlayer = 1;
var randButtonID;
var addScore = 1;
var subScore = -3;
setBoard();
function setBoard() {
  var R = randomNumber(0, 235);
  var G = randomNumber(0, 235);
  var B = randomNumber(0, 235);
  var color = rgb(R, G, B);
  setProperty("button1", "background-color", color);
  setProperty("button2", "background-color", color);
  setProperty("button3", "background-color", color);
  setProperty("button4", "background-color", color);
  var diffColor = rgb(R+20, G+20, B+20);
  randButtonID = "button"+randomNumber(1,4);
  setProperty(randButtonID, "background-color", diffColor);
  console.log("correct one is: " + randButtonID);
}

function checkCorrect(buttonID){
console.log("checking: "+buttonID);
if (buttonID == randButtonID) {
console.log("You got it right!");
updateScoreBy(addScore);
} else {
console.log("WRONG");  
updateScoreBy(subScore);
}
console.log("Checking: "+buttonID);
if (((p1Score>10)&&(p1Score>=(p2Score+2)))||(p1Score==(p2Score+5))){
   setScreen("gameOver_screen");
  showElement("player1Win_label");
  hideElement("player2Win_label");
 }
if (((p2Score>10)&&(p2Score>=(p1Score+2)))||(p2Score==(p1Score+5))) {
     setScreen("gameOver_screen");
     showElement("player2Win_label");
     hideElement("player1Win_label");
}
setBoard();
switchPlayer();
  }

onEvent("button1", "click", function(){
    checkCorrect("button1");
});

onEvent("button2", "click", function(){
    checkCorrect("button2");
});


onEvent("button3", "click", function(){
    checkCorrect("button3");
});


onEvent("button4", "click", function(){
    checkCorrect("button4");
});

function switchPlayer(){
     if(currentPlayer==1){
         currentPlayer=2;
     } else {
         currentPlayer=1;
     }
     console.log("current player is: "+currentPlayer);
if (currentPlayer===1) {
   showElement("player1_highlight");
     hideElement("player2_highlight");
 } else {
   showElement("player2_highlight");
     hideElement("player1_highlight");
 }
}

function updateScoreBy(amt){
     if(currentPlayer == 1){
         p1Score = p1Score + amt;
         setText("score1_label", p1Score);
     } else {
         p2Score = p2Score + amt;
         setText("score2_label", p2Score);
     }
     console.log("P1 score: " + p1Score);
     console.log("P2 score: " + p2Score);
     if (p1Score<0) {
  p1Score=0;
     setText("score1_label", p1Score);
 }
     if (p2Score<0) {
  p2Score=0;
     setText("score2_label", p2Score);
}}

onEvent("replay", "click", function() {
  setScreen("gamePlay_screen");
  p1Score=0;
  setText("score1_label", p1Score);
  p2Score=0;
  setText("score2_label", p2Score);
  currentPlayer=1;
});

function timer() {
setText("time", 5);
}
