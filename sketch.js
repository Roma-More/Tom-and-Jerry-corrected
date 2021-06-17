var tom,tomImage;
var jerry,jerryImage;
var garden,gardenImage;
var tom2Image;
var jerry2Image

function preload() {
    //load the images here
    tomImage = loadImage("images/cat1.png");
    jerryImage = loadImage("images/mouse1.png");
    gardenImage = loadImage("images/garden.png");
    jerry2Image = loadImage("images/mouse2.png");
    tom2Image = loadImage("images/cat2.png");
    tom3Image = loadImage("images/cat4.png");
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,20,20);
    garden.addImage(gardenImage);
    
     

    tom = createSprite(700,600,50,50);
    tom.addImage(tomImage);
    tom.scale = 0.15;
    

    jerry = createSprite(200,570,30,30);
    jerry.addImage(jerryImage);
    jerry.scale = 0.2;
  //  jerry.velocityX = 1;

    
    

}

function draw() {

    background(255);

  //  tom.debug = true;
  //  jerry.debug = true;

    tom.setCollider("circle",0,0,550);
    jerry.setCollider("circle",0,0,350);
    
    
    if(tom.collide(jerry)) {
        tom.velocityX = 0;
        tom.velocityY = 0;
        jerry.velocityX = 0;
        jerry.velocityY = 0;

        tom.addAnimation("cat4.png",tom3Image);
        tom.changeAnimation("cat4.png");

        jerry.addAnimation("mouse2.png",jerry2Image);
        jerry.changeAnimation("mouse2.png");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -2;
      tom.addAnimation("cat2.png",tom2Image);
      tom.changeAnimation("cat2.png");
      tom.scale = 0.2
  }

  




}
