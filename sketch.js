var trex, trex_running, edges;
var groundImage;
var cloudImage;
var score = 0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");

}

function setup(){
 
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  ground=createSprite(300,180,600,20);
  ground.addImage(groundImage);
  ground.velocityX=-2;

  invisibleGround=createSprite(300,190,600,5);
 invisibleGround.visible=false;
}


function draw(){
  //set background color 
  background("lavender");

  text("score : "+score,500,40)
  score=score+Math.round(frameCount/60);
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>150){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if (ground.x<0){
    ground.x=300
  }
  
  //stop trex from falling down
 // trex.collide(ground);
 trex.collide(invisibleGround);
 spawnClouds();
 spawnObstacle();
  drawSprites();

}
function spawnClouds(){
  if(frameCount % 60 === 0){
    var cloud = createSprite(600,50,20,20);
    cloud.velocityX = -2;
    cloud.addImage(cloudImage);
    var rand=Math.round(random(50,100));
    cloud.y=rand;
    cloud.scale=0.5;
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
    cloud.lifetime = 300
  }
  
}
function spawnObstacle(){
  if(frameCount % 70===0){
    var obstacle=createSprite(600,160,20,30);
    var jin = Math.round(random(1,6));
    switch(jin){
      case 1: obstacle.addImage(obstacle1);
      break;
      case 2: obstacle.addImage(obstacle2);
      break;
      case 3: obstacle.addImage(obstacle3);
      break;
      case 4: obstacle.addImage(obstacle4);
      break;
      case 5: obstacle.addImage(obstacle5);
      break;
      case 6: obstacle.addImage(obstacle6);
      break;
default:break;

    }
    obstacle.velocityX=-2;
    obstacle.scale=0.5;
    obstacle.lifetime=300;
  }
}