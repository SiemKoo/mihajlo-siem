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

let spelerX = 600; // x-positie van speler
let spelerY = 530; // y-positie van speler
let health = 100;  // health van speler

let spelerX1 = 800;
let spelerY1 = 530;

let objectX = 900; 
let objectY = 251;

let objectX1 = -120;
let objectY1 = 251;

let img; // plaatje
let img1;
let img2;
let img3;

let spelerSpringt = false;
let springSnelheid = 0;
let springSnelheidStart = 15;
let zwaartekracht = 0.9;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler

    if (keyIsDown(65) && spelerX > -60) { //A
      spelerX= spelerX-4
      }

      if (keyIsDown(68) && spelerX < 1180) { //D
        spelerX= spelerX+4
        }
          if (spelerSpringt === false && keyIsDown(87) && spelerY===721) { //W

            spelerSpringt = true;
            
            springSnelheid = springSnelheidStart;
            
            }
            
            if (spelerSpringt === true && spelerY<720) {
            
            spelerY = spelerY - springSnelheid;
            
            springSnelheid = springSnelheid - zwaartekracht;
            
            }
            
            if (spelerY > 800) {
            
            spelerSpringt = false;
            
            }
  // speler1

    if (keyIsDown(65) && spelerX1 > -60) { //A
      spelerX1= spelerX1-4
      }

      if (keyIsDown(68) && spelerX1 < 1180) { //D
        spelerX1= spelerX1+4
        }
          if (spelerSpringt === false && keyIsDown(87)) { //W

            spelerSpringt = true;
            
            springSnelheid = springSnelheidStart;
            
            }
            
            if (spelerSpringt === true) {
            
            spelerY1 = spelerY1 - springSnelheid;
            
            springSnelheid = springSnelheid - zwaartekracht;
            
            }
            
            if (spelerY1 > 525) {
            
            spelerSpringt = false;
            
            }

  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
 fill("green")
 rect(0,0,1280,720)
  
  // object

  ellipse(1000, 400, 150, 150)
  image(img1, objectX, objectY, 500, 500);
  

  // object1
  image(img2, objectX1, objectY1, 500, 500);

  // speler
  
  image(img, spelerX, spelerY, 200, 200);

  // speler1

   image(img3, spelerX1, spelerY1, 200, 200);

  // punten en health

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
  img = loadImage ('players/group-breaking-bad/walterwhite.png');
  img1 = loadImage ('items/baskethoopr.png');
  img2 = loadImage ('items/baskethoopl.png');
  img3 = loadImage ('players/group-breaking-bad/jessepinkman.png');
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
