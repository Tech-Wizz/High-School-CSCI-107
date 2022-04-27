// Prepare Turtle to Draw
hide();
penUp();

// First draw the background
drawBackground();

//Draw Rock
penColor("gray");
moveTo(randomNumber(0, 50), 448);
dot(randomNumber(0, 100));

//Draw all the starfish 
if (randomNumber(0, 10)) {
  moveTo(randomNumber(10, 390),randomNumber(320, 440));
  drawStarfish(randomNumber(10, 100), randomNumber(0, 250), randomNumber(0, 250), randomNumber(0, 250));
}

// Draw all the seagrass on bottom of screen
drawSeagrass(randomNumber(30, 100));
drawSeagrass(randomNumber(30, 100));
drawSeagrass(randomNumber(30, 100));
drawSeagrass(randomNumber(30, 100));
drawSeagrass(randomNumber(30, 100));
drawSeagrass(randomNumber(30, 100));
drawSeagrass(randomNumber(30, 100));

// Draw all the fish
moveTo(100,100);
drawFish(randomNumber(5, 100), randomNumber(0, 250), randomNumber(0, 250), randomNumber(0, 250));
moveTo(200, 200);
drawFish(randomNumber(5, 100), randomNumber(0, 250), randomNumber(0, 250), randomNumber(0, 250));

// Make the background by drawing a large dot
function drawBackground(){
  penColor("#008080");
  penRGB(0, randomNumber(0, 100), randomNumber(0, 250));
  dot(1000);
}

// Draw a five pointed star with a wide pen.
function drawStarfish(size, red, green, blue){
  // Setting up the pen
  penRGB(red,green,blue);
  penWidth(size-(size/1.5));
  penDown();
  
  turnTo(0);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  penUp();
}

// Switches between left and right arcs to make sea grass
function drawSeagrass(lenght){
  // Setting up the pen
  penRGB(0,255,0, 0.5);
  penWidth(10);
  
  //grass position 
  moveTo(randomNumber(-50, 400),450);
turnTo(0);
  
  // Draw four arcs to make grass
  penDown();
  arcLeft(30,lenght);
  arcRight(60,lenght);
  arcLeft(60,lenght);
  arcRight(60,lenght);
  
  penUp();
}

// Draw a single fish at current turtle location
function drawFish(size, red, green, blue){
  // Setting up the pen
  penRGB(red,green,blue);
  penWidth(size-size/3);
  penDown();
  
  // Fish body
  dot(size);
  turnTo(randomNumber(0, 360));
  moveForward(size);
  
  // Fish tail
  turnLeft(size);
  moveForward(size);
  turnRight(120);
  moveForward(size);
  turnRight(120);
  moveForward(size);
  turnRight(120);
  
  penUp();
}
