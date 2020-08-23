var car1,wall1;
var speed,weight;
var deformaton;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  car1 = createSprite(50,200,20,10);
  wall1 = createSprite(1500,200,60,height/2);

  wall1.shapeColor = color(80,80,80);

  car1.velocityX = speed;

  deformation = 0.5 * weight * speed * speed / 22500;
}

function draw() {
  background(255,255,255);  

  car1.collide(wall1);

  if(deformation < 100) {
    car1.shapeColor = color(0,255,0);
  } if (deformation > 100 && deformation < 180) {
    car1.shapeColor = color(230,230,0);
  } if (deformation > 180) {
    car1.shapeColor = color(255,0,0);
  }

  drawSprites();

  textSize(30);
  fill("black");  
  text("Deformation: " + deformation,750,200);
}