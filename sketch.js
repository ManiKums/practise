const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    var dog_opostion={
        restitution:1.0
    }
    var mani={
        restitution:1.0
    }

   ground= Bodies.rectangle(200,380,400,20,object_options);
    World.add(world,ground);
ball=Bodies.circle(200,200,50,dog_opostion)
ball2=Bodies.circle(180,180,50,mani)
World.add(world,ball)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50)
ellipse(ball2.position.x,ball2.position.y,50)
}
