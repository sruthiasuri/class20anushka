
var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600,200,50,80);
  fixedRect.shapeColor="blue";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="blue";

  fixedRect.debug=true;
  movingRect.debug=true;
  
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
  {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

 
  drawSprites();
}