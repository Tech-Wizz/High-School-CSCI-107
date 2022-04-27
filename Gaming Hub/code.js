console.log("Starting Hub...");
onEvent("CTWInfo", "click", function(){
stopSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3");
stopSound("assets/32854176.mp3");
stopSound("assets/maze.mp3");
playSound("assets/CTW.mp3", false);
console.log("Explaining Catch The Wizard");
});
onEvent("SInfo", "click", function(){
stopSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3");
stopSound("assets/CTW.mp3");
stopSound("assets/maze.mp3");
playSound("assets/32854176.mp3", false);
console.log("Explaining Illusion");
});
onEvent("MInfo", "click", function(){
stopSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3");
stopSound("assets/32854176.mp3");
stopSound("assets/CTW.mp3");
playSound("assets/maze.mp3", false);
console.log("Explaining Maze");
});
var time;
onEvent("chasergame", "click", function(){
time = setTimeout(function() {
 setScreen("lose");
 playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
 playSound("assets/category_female_voiceover/you_lose_female.mp3", false);
 console.log("Player Lost");
}, 20000);
setScreen("chaser");
console.log("Starting Catch The Wizard");
});
onEvent("wizard", "mouseover", function(){
setPosition("wizard", randomNumber(0, 216), randomNumber(0, 350), 50, 50);
setSize("wizard", 100, 100);
playSound("assets/category_digital/laser_fade_4.mp3", false);
console.log("Moving Wizard");
});
onEvent("wizard", "click", function(){
setScreen("win");
playSound("assets/category_male_voiceover/you_win_male.mp3", false);
playSound("assets/category_female_voiceover/you_win_female.mp3", false);
clearTimeout(time);
console.log("Stoping Timer");
console.log("Player Won");
});
onEvent("chaserloose", "click", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
playSound("assets/category_female_voiceover/you_lose_female.mp3", false);
clearTimeout(time);
console.log("Stoping Timer");
console.log("Player Lost");
});
onEvent("loosetoTitle", "click", function(){
setScreen("Main");
console.log("Rturning to Title");
stopSound("assets/default.mp3");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("winToTitle", "click", function(){
setScreen("Main");
console.log("Rturning to Title");
stopSound("assets/category_instrumental/chime.mp3");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("mazeWin", "click", function(){
setScreen("win");
clearTimeout(time);
console.log("Stoping Timer");
console.log("Player Won");
});
onEvent("Almost2", "mouseover", function(){
playSound("assets/category_animals/monkey.mp3", false);
});
onEvent("almost1", "mouseover", function(){
playSound("assets/category_animals/snake.mp3", false);
});
onEvent("wall1", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall2", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall3", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall4", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall5", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall6", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall7", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall8", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall9", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall10", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall11", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall12", "mouseover", function(){
setScreen("lose");
clearTimeout(time);
console.log("Stoping Timer");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall13", "mouseover", function(){
setScreen("lose");
playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("toMaze", "click", function(){
time = setTimeout(function() {
 setScreen("lose");
 playSound("assets/category_male_voiceover/you_lose_male.mp3", false);
 playSound("assets/category_female_voiceover/you_lose_female.mp3", false);
 console.log("Player Lost");
}, 20000);
setScreen("Maze");
console.log("Starting Maze");
playSound("assets/category_male_voiceover/go_male.mp3", false);
playSound("assets/category_female_voiceover/go_female.mp3", false);
});
onEvent("mazeWin", "click", function(){
setScreen("win");
console.log("Player Won");
playSound("assets/category_male_voiceover/you_win_male.mp3", false);
playSound("assets/category_female_voiceover/you_win_female.mp3", false);
});
onEvent("win", "mouseover", function(){
playSound("assets/category_instrumental/chime.mp3", true);
});
onEvent("suprisebtn", "click", function(){
setScreen("Illusion");
console.log("Starting Jump Scare");
setTimeout(function() {
 stopSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3");
 setScreen("Suprise");
 playSound("Woman_Scream_Sound_Effect_1[Mp3Converter.net].mp3", false);
 console.log("Player Scare Starting");
}, 20000);
});
onEvent("scaretotitle", "click", function(){
setScreen("Main");
console.log("Player Lived!");
console.log("Rturning to Title");
});
onEvent("credits", "click", function(){
setScreen("Credit");
console.log("Launching Credits");
});
onEvent("credittotitle", "click", function(){
setScreen("Main");
console.log("Rturning to Title");
});
onEvent("TechWizard", "click", function(){
playSound("assets/category_male_voiceover/hurry_up_male.mp3", false);
console.log("Impatient Wizard");
});
