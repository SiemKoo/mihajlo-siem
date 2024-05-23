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
const STARTSCHERM = 0;
const SPELEN = 1;
const GAMEOVER = 2;
let spelStatus = STARTSCHERM;

let spelerX = 700; // x-positie van speler
let spelerY = 451; // y-positie van speler
let health = 100;  // health van speler

let spelerX1 = 900;
let spelerY1 = 451;
 
let spelerX2 = 350;
let spelerY2 = 451;

let spelerX3 = 150;
let spelerY3 = 451;

let objectX = 900;
let objectY = 170;


let objectX1 = -120;
let objectY1 = 170;

let objectX2 = 610;
let objectY2 = 200;


let img;  // plaatje
let img1; // plaatje
let img2; // plaatje
let img3; // plaatje
let img4; // plaatje
let img5; // plaatje
let img6; // plaatje
let img7; // plaatje
let img8; // plaatje


let spelerSpringt = false;
let springSnelheid = 0;
let springSnelheidStart = 20;
let zwaartekracht = 1.8;

let spelerSpringt1 = false;
let springSnelheid1 = 0;
let springSnelheidStart1 = 20;
let zwaartekracht1 = 1.8;
 
let versnelling = 0.2;
var val = true;
var bounce;
var bounceR = true;
var bounceL;


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

    if (spelerY > 451  || spelerY1 > 451) {
    
      spelerSpringt = false;
      
      } 

  //speler2 & 3

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
  
  if (spelerY2 > 451 || spelerY3 > 451) {
  
  spelerSpringt1 = false;
  
  }
  // object2
if ( objectY2 < 0 ) {
 val = true;
 bounce = false;
}
if (val === true) {
  objectY2 = objectY2 +1 +versnelling;
 versnelling = versnelling + 0.2;
 if(versnelling > 5) {
  versnelling = 5;
}
}


if ( objectY2 > 600) {
val = false;
bounce = true;
  

}
if (bounce === true) {
  objectY2 = objectY2 - 3 -versnelling;
  versnelling = versnelling + 2;
  if(versnelling > 5) {
    versnelling = 5;
  }
}
if ( objectX2 < 0) {
  bounceR = true;
  bounceL = false;
}
if (bounceR === true) {
  objectX2 = objectX2 +1 +versnelling;
  versnelling = versnelling + 0.2;
  if(versnelling > 5) {
   versnelling = 5;
 }
}

if (objectX2 > 1200) {
  bounceR = false;
  bounceL = true;
}

if (bounceL === true) {
  objectX2 = objectX2 - 3 -versnelling;
  versnelling = versnelling + 2;
  if(versnelling > 5) {
    versnelling = 5;
  }
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
  
  image( img7, 0, 0, 1280, 720);
  //rect(0, 0, 1280, 720)

  // object

  image(img1, objectX, objectY, 500, 500);


  // object1
  image(img2, objectX1, objectY1, 500, 500);

  // object2

  image(img5, objectX2, objectY2, 70, 70);

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
  img7 = loadImage('basketballcourt.png');
  img8 = loadImage('beginfoto.png');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === STARTSCHERM) {
    // toon STARTSCHERM met uitleg
    //background('green')
    image( img8, 0, 0, 1400, 720);
    fill('white');
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Welkom bij het spel Basket-Multiverse.\n\ Gebruik de knoppen W, A en D toetsen om speler en speler 1 te besturen. \n\ Gebruik de knoppen pijltje omhoog, linker pijltje en rechter pijltje om speler 2 en speler 3 te besturen. \n\ Klik op de ENTER knop om verder te gaan", width / 2, height / 2);


    // start het spel als de ENTER toets wordt geklikt

    if (keyIsPressed && keyCode === ENTER) {
      spelStatus = SPELEN;
    }
  } else if (spelStatus === SPELEN) {
    // speelscherm
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
  } else if (spelStatus === GAMEOVER) {
    // GAME OVER SCHERM
    tekenScorebord();
    fill('white');
    textSize(32);
    textAlign (CENTER, CENTER);
    Text("Game Over!!", width /2, height / 2);

    // Start het spel opnieuw als de Enter knop wordt geklikt
    if ( keyIsPressed && keyCode === ENTER) {
      resetGame();
    }
 }
}
