var aryan ;
function setup() {
  createCanvas(1280,518);
aryan = createSprite(75,84,50,50);
}

function draw() 
{  
  background(30);
if(keyIsDown(LEFT_ARROW)) {
aryan.x=aryan.x-2;
}
if(keyIsDown(RIGHT_ARROW)) {
aryan.x=aryan.x+2;
}
if(keyIsDown(DOWN_ARROW)) {
  aryan.y=aryan.y+2
}
if(keyIsDown(UP_ARROW)) {
  aryan.y=aryan.y-2
}
drawSprites();
}

