const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var caixa1, caixa2, porco1, tronco1;
var caixa3, caixa4, porco2, tronco2;
var caixa5, tronco3, tronco4;
var fundoImg, solo, platforma;
var bird, estilingue;
var estado = "NOESTILINGUE";

function preload() {
    fundoImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    solo = new Solo(600,height,1200,20);
    platforma = new Solo(150, 305, 300, 170);

    caixa1 = new Caixa(700,320,70,70);
    caixa2 = new Caixa(920,320,70,70);
    porco1 = new Porco(810, 350);
    tronco1 = new Tronco(810,260,300, PI/2);

    caixa3 = new Caixa(700,240,70,70);
    caixa4 = new Caixa(920,240,70,70);
    pig3 = new Porco(810, 220);

    tronco3 =  new Tronco(810,180,300, PI/2);

    caixa5 = new Caixa(810,160,70,70);
    tronco4 = new Tronco(760,120,150, PI/7);
    log5 = new Tronco(870,120,150, -PI/7);

    bird = new Passaro(200,50);

    estilingue = new Estilingue(bird.body,{x:200, y:50});
}

function draw(){
    background(fundoImg);
    Engine.update(engine);
    //strokeWeight(4);
    caixa1.display();
    caixa2.display();
    solo.display();
    porco1.display();
    tronco1.display();

    caixa3.display();
    caixa4.display();
    pig3.display();
    tronco3.display();

    caixa5.display();
    tronco4.display();
    log5.display();

    bird.display();
    platforma.display();
    //log6.display();
    estilingue.display();    
}

function mouseDragged(){
    if(estado === "NOESTILINGUE"){
        Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    estilingue.voar();
    estado = "LANCADO";
}
function keyPressed(){
    if(keyCode === 32){
        estilingue.ligar();
        estado = "NOESTILINGUE";
    }
}