var BananaImage, obstacleImage, obstacleGroup, Background, foodGroup, score, player, playerImage, fruit, stone,
 backgroundImage,stoneImage  


function preload() {
  backgroundImage = loadImage("jungle.png");
  playerImage=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png",
    "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png",
    "Monkey_09.png", "Monkey_10.png");

  BananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
}

function fruits() {
  if (world.framecount % 80 === 0) {
    banana = createSprites(100, 50, 20, 20);
    banana.addImage(bananaImage);
    foodGroup.add(banana);
    banana.scale = 0.05;
    banana.lifetime = 100;
    banana.velocityX = -4;
  }
}

function spawnObstacles() {
  if (world.framecount % 100 === 0) {
    stone = createSprite(340, 200, 20, 20);
    stone.velocityY = -4;
    stone.addImage(stoneImage);
    stone.scale = 0.15;
    obstaclesGroup.add(stone);
  }
}

function setup() {
  createCanvas(400, 400);
  background("green");
  
  var Background = createSprite(200, 200, 10, 10);
  Background.addImage(backgroundImage);
  Background.velocityX=-4;
  
  player = createSprite(50, 340, 20, 20);
  player.addAnimation(playerImage);

  ground.visible = false;
   stroke(white);
  textSize(20);
  fill("white");
  
   foodGroup = new Group();
  obstaclesGroup = new Group();


}

function draw() {
  if (background.x < 0) {
    background = width / 4;
  }
  fruits();
  spawnObstacles();
  if (keydown("space")) {
    player.velocityY=-10;
    



  }
  player.velocityY=player.velocityY+0.5;
  
  if (obstaclesGroup.isTouching(player)) {
    player.scale = 0.2;

  }
  if(foodGroup.isTouching(player)) {
   score=score+2;
   foodGroup.destroyEach(); 
    
    
    
  }   

 

  switch (score) {
    case 10:player.scale = 0.12;
            break;
    case 20:player.scale=0.14;
            break;
    case 30:player.scale=0.16;
            break;
    case 40:player.scale=0.18;
            break;
           default : break; 
  }        

      background(220);
  drawSprites();
  text("score: " + score, 500, 50);
  
  }
  

  
