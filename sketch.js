const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;
//game sounds
var birdSelectSound,birdFlySound,pigSnortSound;

function preload(){
    backgroundImg = loadImage("sprites/skyBackground.jpg");
    birdFlySound=loadSound("sounds/bird_flying.mp3")
    pigSnortSound=loadSound("sounds/pig_snort.mp3")
    birdSelectSound=loadSound("sounds/bird_select.mp3")
}

function setup(){
    var canvas = createCanvas(1535,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1500,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(780,320+200,100,100);
    box2 = new Box(910,320+200,100,100);
    pig1 = new Pig(810, 350+200);
    log1 = new Log(810,260+230,400, PI/2);

    box3 = new Box(700,240+200,100,100);
    box4 = new Box(920,240+200,100,100);
    pig3 = new Pig(810, 220+200);
    // pig4 = new Pig(910, 220);
    pig5 = new Pig(880, 350+200);
    pig6 = new Pig(880, 220+200);
    log3 =  new Log(810,180+230,400, PI/2);

    box5 = new Box(810,160+200,100,100);
    log4 = new Log(760,120+230,200, PI/7);
    log5 = new Log(870,120+230,200, -PI/7);


    // box6 = new Box(780+200,320+200,100,100);
    // box7 = new Box(910+200,320+200,100,100);
    // pig7 = new Pig(810+200, 350+200);
    // log6 = new Log(810+200,260+230,400, PI/2);

    // box8 = new Box(700+200,240+200,100,100);
    // box9 = new Box(920+200,240+200,100,100);
    // pig8 = new Pig(810+200, 220+200);
    // // pig4 = new Pig(910, 220);
    // pig9 = new Pig(880+200, 350+200);
    // pig10 = new Pig(880+200, 220+200);
    // log7 =  new Log(810+200,180+230,400, PI/2);

    // box10 = new Box(810+200,160+200,100,100);
    // log8 = new Log(760+200,120+230,200, PI/7);
    // log9 = new Log(870+200,120+230,200, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:40});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    
    pig5.display();
    pig5.score();
    pig6.display();

    // box7.display();
    // box8.display();
    // box9.display();
    // box10.display();

    // pig7.display();
    // pig8.display();
    // pig9.display();
    // pig10.display();

    // log7.display();
    // log8.display();
    // log9.display();


    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        birdSelectSound.play()
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    birdFlySound.play()
    gameState = "launched";
   
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
       birdSelectSound.play()
    }
}
