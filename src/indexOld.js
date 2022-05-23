import RedColor from "brushes"

function setup() 
{
    createCanvas(400, 600);
    // set up some settings to make everything centered by default
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}
  
  /** This function runs in an infinitely repeating loop */
function draw() 
{
    if (mouseIsPressed) {
        fill(RedColor.name);
        stroke("white");
    } else {
        fill("white");
        stroke("black");
    }

    ellipse(mouseX, mouseY, 80, 80);

}