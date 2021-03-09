var canvas;
var box1, box2, box3, box4, box;
var topEdge, bottomEdge, rightEdge, leftEdge, Edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100,585,175,20);
        box1.shapeColor="blue";
    box2 = createSprite(300,585,175,20);
        box2.shapeColor="orange";
    box3 = createSprite(500,585,175,20);
        box3.shapeColor="red";
    box4 = createSprite(700,585,175,20);
        box4.shapeColor="green";

    box = createSprite(random(20,750),100,50,50);
    box.shapeColor="white";

    box.velocityX = -4;
    box.velocityY = 4;
}

function draw() {
    background("black");

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(box1.isTouching(box)&&box.bounceOff(box1)){
        box.shapeColor="blue";
    }

    if(box2.isTouching(box)&&box.bounceOff(box2)){
        box.shapeColor="orange";
    }

   if(box3.isTouching(box)&&box.bounceOff(box3)){
        box.shapeColor="red";
    }
    
    if(box4.isTouching(box)&&box.bounceOff(box4)){
         box.shapeColor="green";
        }
    drawSprites();
}