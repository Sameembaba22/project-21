var bullet,  wall;
var weight, thickness;


function setup() {
  createCanvas(800,400);

  bullet = createSprite(400,200,50,20);
  bullet.shapeColor = "white";
  bullet.velocityX = random(223,321);

  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(750,200,thickness,height/2); 

}
function draw() {
  background("black");

  if (hascollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*bullet.velocityX*bullet.velocityX/thickness*thickness*thickness;
    if (damage > 10){
      wall.shapeColor = "red";
    }
    if (damage < 10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hascollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}