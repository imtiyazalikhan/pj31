const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var pinko1=[]
var particles=[]
var ground;
var wall=[]

var divisionHeight=300;

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);
for(var k=0;k<=weidth;k=k+80){
  Divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
  engine = Engine.create();
  world = engine.world;
  pinko1=new Pinkos(200,450,40);
Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  pinko1.desplay();
  for (var j = 0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k = 0; k < Divisions.length; k++){
    division[k].display();
  }
  drawSprites();
}