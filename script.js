/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je gamwe */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
let spelStatus = SPELEN;

let spelerX = 700; // x-positie van speler
let spelerY = 530; // y-positie van speler
let health = 100;  // health van speler

let spelerX1 = 900;
let spelerY1 = 530;

let spelerX2 = 350;
let spelerY2 = 530;

let spelerX3 = 150;
let spelerY3 = 530;

let objectX = 900;
let objectY = 251;


let objectX1 = -120;
let objectY1 = 251;

let objectX2 = 425;
let objectY2 = 150;

let img;  // plaatje
let img1; // plaatje
let img2; // plaatje
let img3; // plaatje
let img4; // plaatje
let img5; // plaatje
let img6; // plaatje


let spelerSpringt = false;
let springSnelheid = 0;
let springSnelheidStart = 20;
let zwaartekracht = 1.8;

let spelerSpringt1 = false;
let springSnelheid1 = 0;
let springSnelheidStart1 = 20;
let zwaartekracht1 = 1.8;



/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler & speler1

  if (keyIsDown(37) && spelerX > -60) { //arrow left
    spelerX = spelerX - 4;
    spelerX1 = spelerX1 - 4;
  }

  if (keyIsDown(39) && spelerX < 1180) { //arrow right
    spelerX = spelerX + 4;
    spelerX1 = spelerX1 + 4;
  }
  if (spelerSpringt === false && keyIsDown(38)) { //arrow up

    spelerSpringt = true;
    
    springSnelheid = springSnelheidStart;
    
    }
    
    if (spelerSpringt === true && (spelerY<720 || spelerY1<720) ) {
    
    spelerY = spelerY - springSnelheid;
    spelerY1 = spelerY1 - springSnelheid;
    
    springSnelheid = springSnelheid - zwaartekracht;
    
    }

    if (spelerY > 525  || spelerY1 > 525) {
    
      spelerSpringt = false;
      
      } 

  //speler2

  if (keyIsDown(65) && spelerX2 > -60) { //A
    spelerX2 = spelerX2 - 4;
    spelerX3 = spelerX3 - 4;
  }

  if (keyIsDown(68) && spelerX2 < 1180) { //D
    spelerX2 = spelerX2 + 4;
    spelerX3 = spelerX3 + 4;

  }
if (spelerSpringt1 === false && keyIsDown(87)) { //arrow up

  spelerSpringt1 = true;
  
  springSnelheid1 = springSnelheidStart1;
  
  }
  
  if (spelerSpringt1 === true && (spelerY2<720 || spelerY3<720)) {
  
  spelerY2 = spelerY2 - springSnelheid1;
  spelerY3 = spelerY3 - springSnelheid1;
  
  springSnelheid1 = springSnelheid1 - zwaartekracht1;
  
  }
  
  if (spelerY2 > 525 || spelerY3 > 525) {
  
  spelerSpringt1 = false;
  
  }

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("green")
  rect(0, 0, 1280, 720)

  // object

  image(img1, objectX, objectY, 500, 500);


  // object1
  image(img2, objectX1, objectY1, 500, 500);

  // object2

  image(img5, objectX2, objectY2, 400, 300);

  // speler

  image(img, spelerX, spelerY, 200, 200);

  // speler1

  image(img3, spelerX1, spelerY1, 200, 200);

  // speler2

  image(img4, spelerX2, spelerY2, 200, 200);

  //speler3

  image(img6, spelerX3, spelerY3, 200, 200);

};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}

/**
 * Preload
 * deze functie geeft de player een plaatje
 */
function preload() {
  img = loadImage('players/group-breaking-bad/walterwhite.png');
  img1 = loadImage('items/baskethoopr.png');
  img2 = loadImage('items/baskethoopl.png');
  img3 = loadImage('players/group-breaking-bad/jessepinkman.png');
  img4 = loadImage('players/group-avatar/aang.png');
  img5 = loadImage('items/basketball.png');
  img6 = loadImage('players/group-avatar/sokka.png');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (health <= 0) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
  }
}
