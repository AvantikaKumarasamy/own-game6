const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;
var backImg, pick, pickImg,knife,knifeImg;


function preload(){
 backImg= loadImage("images/bg2.jpg");
 pickImg = loadImage("images/sad.png");
 knifeImg = loadImage("images/knife1.png");
   }


function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  pick= createSprite(455,637, 50, 50);
  pick.addImage(pickImg);
  pick.scale= 0.2;

  knife = createSprite(200,200);
  knife.addImage(knifeImg);
  knife.scale=0.2;

  cookie = new Cookies(324,286);
  cookie1 = new Cookies(670,339);

  button = new Button(377,181);
  button1 = new Button(495,197);
  button2 = new Button(579,260);
  button3 = new Button(648,145);

  rope1= new Rope(cookie.body,button.body);
  rope2 = new Rope(cookie.body,button1.body);
  rope3 = new Rope(button1.body,button2.body);
  rope4 = new Rope(cookie1.body,button2.body);
  rope5 = new Rope(cookie1.body,button3.body);


  Engine.run(engine);
}



function draw() {
  background(backImg);  

  Engine.update(engine);

  cookie.display();
  cookie1.display();
  button.display();
  button1.display();
  button2.display();
  button3.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  knife.x = mouseX;
  knife.y = mouseY;
 
 //if(knife.isTouching(rope1)){
   //console.log("yes");
 //}

  //line(377,181,495,197);
  
  drawSprites();
  textSize(25);
  stroke("white");
  text(mouseX + "," + mouseY, 30,30);
}