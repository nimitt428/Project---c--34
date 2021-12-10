
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var buildingImg, brokenBuilding_Img
var jcb, jcb_Img;
var building
var distance;

function preload() {

  bgImg = loadImage("game_background.jpg")
  jcb_Img = loadImage("JCB_IMG.png")
  brokenBuilding_Img = loadImage("broken_building_Img.png")
  buildingImg = loadImage("building_Img.png")
}

function setup() {

  createCanvas(800, 800)
  engine = Engine.create();
  world = engine.world;
 
  var options = {
    isStatic: true
  }
  jcb = createSprite(200, windowHeight - 110, 430, 250, options)
  jcb.scale = 0.3
  jcb.addImage("img",jcb_Img)
   

  building = createSprite(500, windowHeight - 180, 150, 130)
  building.scale = 0.7
  building.addAnimation("building",buildingImg)
  building.addAnimation("broken_building",brokenBuilding_Img)
}


function draw() {
  background("white");
  Engine.update(engine);




  imageMode(CENTER)
  image(bgImg, 400, 400, 800, 800)

  if (keyCode == RIGHT_ARROW) {
    jcb.position.x = jcb.position.x + 10
  }
 
  distance = dist(jcb.position.x,jcb.position.y,building.position.x,building.position.y)
  if(distance < 160 ){
  building.changeAnimation("broken_building")
  jcb.x = 10000

  }
  drawSprites()
}







