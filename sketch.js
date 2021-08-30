var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

btn_red = createButton("RED")
btn_red.position(100,50)
mousePressed(red_bg);


btn_green = createButton("GREEN")
btn_green.position(250,50)
mousePressed(green_bg);
}

function draw() {
  background("white");
  
  drawSprites()
}

function mousePressed(a)
{
  background("red")
//r = 255;
//g = 0;
//b = 0;
}

function mousePressed(b)
{
  background("green")
//r = 0;
//g = 255;
//b = 0;
}
