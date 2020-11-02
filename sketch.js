var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground ;
var foodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,400);
  
monkey = createSprite(80,315,15,15);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX=-2;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();

}
function draw() {

  background("lightBlue");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -18;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:", +score, 300 ,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime:", +survivalTime,100,50);
  
  banana();
  obstacles();
  drawSprites();
}

function banana(){
  if(frameCount % 80 === 0){
  var banana = createSprite(500,120,18,18);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1
  banana.velocityX=-3;
  banana.lifetime=200,
  
  foodGroup.add(banana);
  }
  
}
function obstacles(){
  if(frameCount % 300 === 0){
  var obstacle = createSprite(400,330,10,10);
    obstacle.x = Math.round(random(100,450));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    obstacle.velocityX=-3;
    obstacle.lifetime = 200;
  
  obstacleGroup.add(obstacle);
  } 
}



