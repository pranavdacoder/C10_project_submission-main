var sea,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 



  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  background(seaImg)
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    sea.x = 0;
    sea.x = width
  }

 
  drawSprites();
}