var tile, tileGroup;
var score = 0;

function preload(){

}

function setup() {
    createCanvas(600,windowHeight);
    tileGroup = new Group();
}

function draw() {
    background (0);
    text ('Score: ' + score, 75, windowHeight - 100);
    if (mousePressedOver(tile)){
        score = score + 10;
        tile.destroy();
        
    }
    
    if(frameCount % 60 === 0){
    tile = createSprite (random(1,600),1);
    tile.velocityY = 6;
    tileGroup.add(tile);

}
    
    drawSprites();
}