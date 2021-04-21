var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor = "brown";
  
  rect2 = createSprite(400,200,50,50);
  rect2.shapeColor = "brown"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect1)){
    movingRect.shapeColor = "blue";
    rect1.shapeColor = "blue";
  }
  else if(isTouching(movingRect,rect2)){
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }

  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "brown";
    rect2.shapeColor = "brown";
    fixedRect.shapeColor = "green";
  }
 

  
  
  drawSprites();
}



//boolean data
//true - yes
//false - no