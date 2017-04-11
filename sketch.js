var m = 50;
var h = 50;
var MySig = m + h;
var numbers = [15, 20, 40, 37];
var i = 0;

function setup(){
    createCanvas(600,400);
    //background(100,200,100);

}
function draw(){
    background(50,100,150);
    
    if(mouseIsPressed){
    fill(15,0,255);
    rect(mouseX,mouseY,100,MySig);
    }
    strokeWeight(4);
    stroke(255);
    
    var x = 0;
    while(x<750){
        ellipse(x, 255, 25, 25);
        x = x + 50;
    }
    
    for(var x = 0; x < 750; x = x + 50){
        h++;
        ellipse(x, 255, 25, 25);
        ellipse(x, 355, 25, 25);
    }
}