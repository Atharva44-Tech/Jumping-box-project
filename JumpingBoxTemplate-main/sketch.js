var rect1,rect2,rect3,rect4,rect5;

function preload(){
    
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
rect1=createSprite(random(40,10));
rect1.shapeColor="red";

rect2=createSprite(random(40,10));
rect2.shapeColor="purple";

rect3=createSprite(random(40,10))
rect3.shapeColor="green";

rect4=createSprite(random(40,10));
rect4.shapeColor="yellow";

rect5=createSprite(520,500,50,50);
rect5.shapeColor="blue";
    //create box sprite and give velocity

}

function draw() {
    background("lightBlue");
    drawSprites();
    


    rect5.x=mouseX;
  rect5.y=mouseY;
  console.log(rect5.x-rect2.x);
  console.log(rect5.width/2 + rect2.width/2)
    //add condition to check if box touching surface and make it box
    if(argument(rect1,rect3)){
        rect1.shapeColor="red";
        rect3.shapeColor="red";
       
         
       }  
       else{
        rect1.shapeColor="yellow";
        rect3.shapeColor="yellow"; 
       }

function argument(r1,r2){
    if (r1.x-r2.x<r1.width/2+r2.width/2 &&
      r2.x-r1.x<r1.width/2+r2.width/2 && 
      r1.y-r2.y<r1.width/2+r2.width/2 &&
      r2.y-r1.y<r1.width/2+r2.width/2 ){
        return true;
       
   
    }
     
   else{
     
  return false;
  }
  }

}
