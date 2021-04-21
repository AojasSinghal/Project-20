var garden;
var together;
var cat1,cat2,cat3;
var mouse1,mouse2,mouse3;


function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    cat1=loadImage("images/cat1.png")
    cat2=loadImage("images/cat2.png","images/cat3.png")
    cat4=loadImage("images/cat4.png")
    mouse1=loadImage("images/mouse1.png") 
    mouse2=loadImage("images/mouse2.png","images/mouse3.png")
    mouse4=loadImage("images/mouse4.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat=createSprite(870,600);
    cat.addAnimation("tomsleeping",cat1);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("jerrystanding",mouse1);
    mouse.scale=0.15


}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("tomlastImage",cat4);
    cat.x=300
    cat.scale=0.2;
    cat.changeAnimation("tomlastImage");

    mouse.addAnimation("mouselastImage",mouse4);
    mouse.scale=0.15;
    mouse.changeAnimation("mouselastImage");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catrunning",cat2)
cat.changeAnimation("catrunning");

mouse.addAnimation("jerryteasing",mouse2);
mouse.frameDelay=25;
mouse.changeAnimation("jerryteasing")
}

}
