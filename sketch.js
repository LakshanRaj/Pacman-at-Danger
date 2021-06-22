var pacman,ghost1,ghost2,ghost3,ghost4;
var edges

function setup() {
  createCanvas(800,400);
  pacman = createSprite(50,200,50,50);
  
  
}

function draw() {
  background(0); 
if(keyDown("RIGHT_ARROW")){
  pacman.x = pacman.x+7;
}

if(keyDown("LEFT_ARROW")){
  pacman.x = pacman.x-7;
}
if(keyDown("UP_ARROW")){
  pacman.y = pacman.y-7;
}
if(keyDown("DOWN_ARROW")){
  pacman.y = pacman.y+7;
}
edges = createEdgeSprites();
pacman.bounceOff(edges);

spawnGhost();
drawSprites();
}

function spawnGhost(){
  if(frameCount%40===0){
  ghost1 = createSprite(800,200,50,40);
  ghost1.velocityX =-8;
    ghost1.y = Math.round(random(100,300))
  }
}