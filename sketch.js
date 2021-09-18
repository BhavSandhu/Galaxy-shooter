var backgroundIMG
var shooterIMG,shooter
var enemyIMG
var bulletIMG,bullet

function preload(){
backgroundIMG=loadImage('galaxy.jpg')
shooterIMG=loadImage('Alien shooter.png')
enemyIMG=loadImage('enemy.png')
bulletIMG=loadImage('bullet.png')


}


function setup() {
  createCanvas(windowWidth,windowHeight);
  shooter=createSprite(width/2, height/2+200)
  shooter.addImage(shooterIMG)
  shooter.scale=0.2
  
  
}

function draw() {
  background(backgroundIMG);  
  shooter.x=World.mouseX
  drawSprites();
}


function mouseClicked() {
  bullet.createSprite(0,height/2+200)
  bullet.addImage(bulletIMG)
  bullet.x=shooter.x
  
  bullet.velocityY=-10
console.log("hello")
}