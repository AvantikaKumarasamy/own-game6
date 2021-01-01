
var backImg, pick, pickImg,knife,knifeImg, ground,enemyImg;
gameState=0;


function preload(){
 backImg= loadImage("images/bg2.jpg");
 pickImg = loadImage("images/sad.png");
 cookiesImg = loadImage("images/cookie.png");
 enemyImg = loadImage("images/virus.png");
 greenImg = loadImage("images/green.png");
 redImg = loadImage("images/red.png");
 overImg = loadImage("images/gameover.png");
 soundAud = loadSound("images/eat sound.mp3")
   }


function setup() {
  createCanvas(1200,700);
  
 

  pick= createSprite(455,637, 50, 50);
  pick.addImage(pickImg);
  pick.scale= 0.2;

  ground = createSprite(640,683,1400,10);
  ground.visible = false;

 // energyBar = createSprite(950,80,300,25);
  //lossBar = createSprite(200,80,150,25);

  cookieGroup= createGroup();
  enemyGroup = createGroup();

 score = 0; 
 score1 = 0;

  

  
  


  
}



function draw() {
  background(backImg);  
  

  
 if(keyDown(RIGHT_ARROW)){
  pick.x= pick.x+15;
 }

 if(keyDown(LEFT_ARROW)){
  pick.x= pick.x-15;
}

Cookie();
Enemy();

if(gameState===0){
 //energy increase
 if(cookieGroup.isTouching(pick)){
  score = score+1;
  playSound(soundAud);

   if(score===22){
   energy1 = createSprite(1090,80,25,25);
   energy1.addImage(greenImg);
   energy1.scale= 0.15;
  }

  if(score===88){
    energy2 = createSprite(1020,80,25,25);
    energy2.addImage(greenImg);
    energy2.scale= 0.15;
   }

   if(score===132){
    energy3 = createSprite(950,80,25,25);
    energy3.addImage(greenImg);
    energy3.scale= 0.15;
   }

   if(score===154){
    energy4 = createSprite(880,80,25,25);
    energy4.addImage(greenImg);
    energy4.scale= 0.15;
   }

   if(score===176){
    energy5 = createSprite(810,80,25,25);
    energy5.addImage(greenImg);
    energy5.scale= 0.15;
   }

   if(score===220){
    energy6 = createSprite(740,80,25,25);
    energy6.addImage(greenImg);
    energy6.scale= 0.15;
    
   } 
 }
//energy decrease
 if(enemyGroup.isTouching(pick)){
  score1 = score1+1;
  if(score1===22){
   loss1 = createSprite(60,80,25,25);
   loss1.addImage(redImg);
   loss1.scale = 0.15;
  }

  if(score1===88){
    loss2 = createSprite(130,80,25,25);
    loss2.addImage(redImg);
    loss2.scale = 0.15;
   }

   if(score1===154){
    loss3 = createSprite(200,80,25,25);
    loss3.addImage(redImg);
    loss3.scale = 0.15;
   }

   if(score1===220){
    loss4 = createSprite(270,80,25,25);
    loss4.addImage(redImg);
    loss4.scale = 0.15;
   }

   if(score1===286){
    loss5 = createSprite(340,80,25,25);
    loss5.addImage(redImg);
    loss5.scale = 0.15;
   }

   if(score1>=20){
     gameState=1;
    }
  }
}

  if(gameState===1){
    background(overImg);
    cookieGroup.setVelocityYEach(0);
    enemyGroup.setVelocityYEach(0);
     cookieGroup.destroyEach();
     enemyGroup.destroyEach();
     pick.destroy();
     score.destroy();
     score1.destroy();

    //  if(keyDown("space")) {
    //   gameState=0;
    // }
  }


  
  drawSprites();
  textSize(25);
  stroke("white");
  text(mouseX + "," + mouseY, 30,30);
  //text("score :"+score,600,200);
}

function Cookie(){
  if(frameCount%60===0){
    cookie =createSprite(10,200,20,20);
    cookie.addImage("cookie",cookiesImg);
    cookie.scale = 0.3;

    cookie.x= random(20,1000);
    cookie.velocityY= 12;

    cookieGroup.add(cookie);

  }
}

function Enemy(){
  if(frameCount%80===0){
   enemy =createSprite(10,200,20,20);
   enemy.addImage("virus",enemyImg);
   enemy.scale = 0.3;

   enemy.x= random(20,1000);
   enemy.velocityY= 12;

   enemyGroup.add(enemy);

  }
}