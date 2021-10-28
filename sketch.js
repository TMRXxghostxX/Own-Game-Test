const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var sword1;
var world, knight;

var launcherObject;
var launchForce = 100;

function preload(){
  knight = loadImage("Knight_Pixel_Art-removebg.png")
}

function setup() {

sword1 = new Sword(235, 420, 30);

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  launcherObject = new launcher(stoneObj.body, { x: 235, y: 420 });

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  

sword1.display();
knight.display();

  drawSprites();
}