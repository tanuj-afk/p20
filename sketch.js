var bgImg
var cat
var mouseImg1
var mouse
var catImg1
var mouseImg2
var catImg2
var catImg3
var mouseImg3
function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    catImg1=loadAnimation("cat1.png");
    mouseImg1=loadAnimation("mouse1.png");
    catImg2=loadAnimation("cat2.png,cat3.png");  
    mouseImg2=loadAnimation("mouse2.png,mouse3.png");
    catImg3=loadAnimation("cat4.png");
    mouseImg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

cat=createSprite(870,600);
cat.addAnimation("cat sleeping",catImg1);
cat.scale=0.15        

mouse=createSprite(200,600);
mouse.addAnimation("mouse standing",mouseImg1);
mouse.scale=0.2


}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(catwidth-mousewidth)/2);
    cat.velocityX=0
    cat.addAnimation("cat last",catImg3);
     cat.x=300
     cat.scale=0.15
       cat.changeAnimation("cat last");
     mouse.velocityX=0
    mouse.addAnimation("mouse last",mouseImg3);
     
     mouse.scale=0.15
     mouse.changeAnimation("mouse last");
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCoad===left_arrow)
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;


cat.velocityX=-5
cat.addAnimation("cat running",scatImg2);
cat.changeAnimation("cat running");
}




