var x = 0.01;
var y = 0;
var z = 0;
var sigma = 10;
var rho = 28;
var beta = 8/3;

var points = new Array();

function setup() 
{
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
}

function draw() 
{
  background(0);
  var dt = 0.01;
  var dx = (sigma * (y - x)) * dt;
  var dy = (x * (rho - z) - y) * dt;
  var dz = (x * y - beta * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(new p5.Vector(x, y, z)); //Vector for each point printed 

  translate(0, 0, -80);
  var camX = map(mouseX, 0, width, -500, 500); //Camera control based on mouse
  var camY = map(mouseY, 0, height, -500, 500);
  camera(camX, camY, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  scale(5);
  stroke(255);
  noFill();
  scale(1.5);
  var hue = 0;
  beginShape();

  for (var v of points) {
    stroke(hue, 255, 255);
    vertex(v.x, v.y, v.z);
    hue += 1;
    if (hue > 255) {        //RGB4LYF
      hue = 0;
    }
  }
  endShape();
    
  //console.log(x,y,z);
}
