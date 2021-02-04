var MovingRect, FixedRect;

function setup() {
  createCanvas(800,400);
  FixedRect = createSprite(200, 200, 50, 50);
  FixedRect.shapeColor = "blue";
  MovingRect = createSprite(400,200,50,50);
  MovingRect.shapeColor = "blue";
}


function draw() {
  background("black");  
  
  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;
  
  if( MovingRect.x - FixedRect.x < FixedRect.width / 2 + MovingRect.width / 2 && 
      FixedRect.x - MovingRect.x < FixedRect.width / 2 + MovingRect.width / 2 &&
      MovingRect.y - FixedRect.y < FixedRect.height / 2 + MovingRect.height / 2 && 
      FixedRect.y - MovingRect.y < FixedRect.height / 2 + MovingRect.height  / 2  ){
          FixedRect.shapeColor = "red";
          MovingRect.shapeColor = "red";  
      }
  else{ FixedRect.shapeColor = "blue";
            MovingRect.shapeColor = "blue";  
 }


  drawSprites();
}