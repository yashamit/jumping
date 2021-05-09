var canvas;
var music;
var box
var blue , red , orange , green
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,700);

    //create 4 different surfaces
    blue=createSprite(100,550,200,30)
    blue.shapeColor=("blue")

    red=createSprite(300,550,200,30)
    red.shapeColor=("red")

    orange=createSprite(500,550,200,30)
    orange.shapeColor=("orange")

    green=createSprite(700,550,200,30)
    green.shapeColor=("green")

    //create box sprite and give velocity
    box=createSprite(380,300,25,25)
    box.shapeColor=("white")

    box.velocityY=10
    box.velocityX=5
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    
    if(box.isTouching(blue)){
        box.shapeColor="blue"
        music.play()
    }
    
    if(box.isTouching(red)){
        box.shapeColor="red"
        music.play()
    }
    if(box.isTouching(orange)){
        box.shapeColor="orange"
        music.play()
    }
    if(box.isTouching(green)){
        box.shapeColor="green"
        music.stop()
    }


   
 
    
    
    //add condition to check if box touching surface and make it box
    box.bounceOff(blue)
    box.bounceOff(green)
    box.collide(red)
    box.bounceOff(orange)
    box.bounceOff(edges)

    if(box.isTouching(blue)){
        box.shapeColor="blue"
    }
    if(box.isTouching(green)){
        box.shapeColor="green"
    }
    if(box.isTouching(red)){
        box.shapeColor="red"
        
    }
    if(box.isTouching(orange)){
        box.shapeColor="orange"
    }
    
    drawSprites();
}
