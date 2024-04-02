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
let spelerY = 560; // y-positie van speler
let health = 100;  // health van speler

let img; // plaatje

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

  if (keyIsDown(83) && spelerY < 750) { //S
    spelerY= spelerY+4
    }

    if (keyIsDown(65) && spelerX > 25) { //A
      spelerX= spelerX-4
      }

      if (keyIsDown(68) && spelerX < 1255) { //D
        spelerX= spelerX+4
        }
          if (spelerSpringt === false && keyIsDown(87)) { //W

            spelerSpringt = true;
            
            springSnelheid = springSnelheidStart;
            
            }
            
            if (spelerSpringt === true) {
            
            spelerY = spelerY - springSnelheid;
            
            springSnelheid = springSnelheid - zwaartekracht;
            
            }
            
            if (spelerY > 560) {
            
            spelerSpringt = false;
            
            }
  // vijand

  // kogel
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
  // vijand

  // kogel

  // speler
  // fill("white");
  // rect(spelerX - 25, spelerY - 25, 50, 50);
  // fill("black");
  // ellipse(spelerX, spelerY, 10, 10);
  image(img, spelerX, spelerY);

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
