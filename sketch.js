var car,wall;
var speed,weight;
var deformaton;

function setup() {
  createCanvas(800,400);
  car = createSprite(100,150,20,20)
  wall = createSprite(700,100,20,150)
  speed = random(5,15)
  weight = random(100,200)
  car.velocityX = speed
}

function draw() {
  background("black");  
 
  if (wall.x - car.x <= (car.width + wall.width)/2) 
  {
    car.velocityX = 0 
    deformation = (0.5 * weight * speed * speed) / 22500
    if(deformation <=100)
    {
     car.shapeColor = "green"
    }
   if(deformation >=100 && deformation <=180)
   {
     car.shapecolor = "yellow"
   }
   if (deformation >=180)
   {
     car.shapeColor = "red"
   }
  }

  drawSprites();
}