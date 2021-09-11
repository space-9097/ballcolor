function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.radius)
  fill (ball.color[0])
  ball.xspeed=1
  ball.x=ball.x+ball.xspeed
}
var ball={
  x:100,
  y:100,
  radius:15,
  xspeed:0,
  yspeed:0,
  color:["red","blue","green"]

}