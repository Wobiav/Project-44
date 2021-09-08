var castle, castleImage;
var wizard, wizardImage;
var goblin, goblinImage;
var ogre, ogreImage;
var dragon, dragonImage;

function preload(){
  wizardImage = loadImage("wizard2.png");

  castleImage = loadImage("castle.jpg");

  goblinImage = loadImage("goblin.png");

  ogreImage = loadImage("ogre.png");

  dragonImage = loadImage("dragon.png")
}

function setup(){

  createCanvas(windowWidth, windowHeight);

  /*castle = createSprite(windowWidth/2+40, windowHeight/2, 20, 20);
  castle.addImage(castleImage);
  castle.scale = 3*/

  wizard = createSprite(windowWidth/2+300, windowHeight/2+300, 20, 20);
  wizard.addImage(wizardImage);
  wizard.scale = 0.8;

}

function draw(){
  background(castleImage)




  if(keyDown("UP_ARROW")){
    wizard.y = wizard.y - 20;
  }

  if(keyDown("DOWN_ARROW")){
    wizard.y = wizard.y + 20;
  }



  drawSprites();

  fill("black")
  textSize(25)
  text("Use Arrow Keys to move up and down", windowWidth/2, windowHeight/2-500 )
}

function spawnOgres(){

}

function spawnDragons(){

}

function spawnGoblins(){
  
}