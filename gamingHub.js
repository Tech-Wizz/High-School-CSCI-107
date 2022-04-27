console.log("Starting Hub...");
playSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3", true);
onEvent("musicoff", "click", function(){
stopSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3");
console.log("Stoping Music");
playSound("sound://default.mp3", false);
});
onEvent("musicon", "click", function(){
playSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3", false);
console.log("Starting Music");
});
onEvent("CTWInfo", "click", function(){
timedLoop(1, function() {
  stopSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3");
});
stopSound("32854176.mp3");
stopSound("maze.mp3");
playSound("CTW.mp3", false);
console.log("Explaining Catch The Wizard");
setTimeout(function() {
 playSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3", false);
 console.log("Restarting Music");
 stopTimedLoop();
}, 7000);
});
onEvent("SInfo", "click", function(){
timedLoop(1, function() {
  stopSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3");
});
stopSound("CTW.mp3");
stopSound("maze.mp3");
playSound("32854176.mp3", false);
console.log("Explaining Illusion");
setTimeout(function() {
 playSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3", false);
 console.log("Restarting Music");
 stopTimedLoop();
}, 7000);
});
onEvent("MInfo", "click", function(){
timedLoop(1, function() {
  stopSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3");
});
stopSound("32854176.mp3");
stopSound("CTW.mp3");
playSound("maze.mp3", false);
console.log("Explaining Maze");
setTimeout(function() {
 playSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3", false);
 console.log("Restarting Music");
 stopTimedLoop();
}, 9000);
});
var time;
onEvent("chasergame", "click", function(){
time = setTimeout(function() {
 setScreen("loose");
 playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
 playSound("sound://category_female_voiceover/you_lose_female.mp3", false);
 console.log("Player Lost");
}, 20000);
setScreen("chaser");
console.log("Starting Catch The Wizard");
});
onEvent("wizard", "mouseover", function(){
setPosition("wizard", randomNumber(0, 216), randomNumber(0, 350), 50, 50);
setSize("wizard", 100, 100);
playSound("sound://category_digital/laser_fade_4.mp3", false);
console.log("Moving Wizard");
});
onEvent("wizard", "click", function(){
setScreen("win");
playSound("sound://category_male_voiceover/you_win_male.mp3", false);
playSound("sound://category_female_voiceover/you_win_female.mp3", false);
clearTimeout(time);
console.log("Stoping Timer");
console.log("Player Won");
});
onEvent("chaserloose", "click", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
playSound("sound://category_female_voiceover/you_lose_female.mp3", false);
clearTimeout(time);
console.log("Stoping Timer");
console.log("Player Lost");
});
onEvent("loosetoTitle", "click", function(){
setScreen("Main");
console.log("Rturning to Title");
stopSound("sound://default.mp3");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("winToTitle", "click", function(){
setScreen("Main");
console.log("Rturning to Title");
stopSound("sound://category_instrumental/chime.mp3");
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
playSound("sound://category_animals/monkey.mp3", false);
});
onEvent("almost1", "mouseover", function(){
playSound("sound://category_animals/snake.mp3", false);
});
onEvent("wall1", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall2", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall3", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall4", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall5", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall6", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall7", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall8", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall9", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall10", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall11", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall12", "mouseover", function(){
setScreen("loose");
clearTimeout(time);
console.log("Stoping Timer");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("wall13", "mouseover", function(){
setScreen("loose");
playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
console.log("Player Lost");
clearTimeout(time);
console.log("Stoping Timer");
});
onEvent("toMaze", "click", function(){
time = setTimeout(function() {
 setScreen("loose");
 playSound("sound://category_male_voiceover/you_lose_male.mp3", false);
 playSound("sound://category_female_voiceover/you_lose_female.mp3", false);
 console.log("Player Lost");
}, 20000);
setScreen("Maze");
console.log("Starting Maze");
playSound("sound://category_male_voiceover/go_male.mp3", false);
playSound("sound://category_female_voiceover/go_female.mp3", false);
});
onEvent("mazeWin", "click", function(){
setScreen("win");
console.log("Player Won");
playSound("sound://category_male_voiceover/you_win_male.mp3", false);
playSound("sound://category_female_voiceover/you_win_female.mp3", false);
});
onEvent("win", "mouseover", function(){
playSound("sound://category_instrumental/chime.mp3", true);
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
playSound("Neonlight_-_Computer_Music_Official_Video[Mp3Converter.net].mp3", false);
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
playSound("sound://category_male_voiceover/hurry_up_male.mp3", false);
console.log("Impatient Wizard");
});
