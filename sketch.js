var bullet; 
var wall,thickness; 
var speed , weight; 
function setup() { 
createCanvas(1600,400); 
speed = random(50,150); 
weight = random(30,52);
thickness = random(22,83); 
bullet = createSprite(50, 200, 50, 10); 
bullet.velocityX = speed; 
bullet.shapeColor ="white";
wall = createSprite(1200,200,thickness,200); 
 wall.shapecolor=color(80,80,80); 
 }
 function draw() { 
 background("black");
 if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0; 
 var deformation = 0.5 * weight * speed * speed/22509; 
 if(deformation>10){ 
  bullet.shapeColor=color(255,0,0); 
  } 
  
 if(deformation<10){ 
  bullet.shapeColor=color(0,255,0); 
  } 
  } drawSprites(); 
  }
  function hasCollided(lbullet,lwall){
      bulletRightEdge=lbullet.x+lbullet.width;
      wallLeftEdge=lwall.x;
      if (bulletRightEdge>=wallLeftEdge)
      {
          return true
      }
      return false;
  }