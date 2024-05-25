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

let walterwhite_X = 700; // x-positie van speler
let walterwhite_Y = 451; // y-positie van speler
let health = 100;  // health van speler

let jessepinkman_X = 900;
let jessepinkman_Y = 451;
 
let aang_X = 350;
let aang_Y = 451;

let sokka_X = 150;
let sokka_Y = 451;

let baskethoopr_X = 900;
let baskethoopr_Y = 170;


let baskethoopl_X = -120;
let baskethoopl_Y = 170;




let walterwhite_img;  // plaatje
let baskethoopr_img; // plaatje
let baskethoopl_img; // plaatje
let jesssepinkman_img; // plaatje
let aang_img; // plaatje
let basketbal_img; // plaatje
let sokka_img; // plaatje
let basketbalveld_img; // plaatje
let beginfoto_img; // plaatje
let eindfoto_img; // plaatje


let spelerSpringt = false;
let springSnelheid = 0;
let springSnelheidStart = 20;
let zwaartekracht = 1.8;

let spelerSpringt1 = false;
let springSnelheid1 = 0;
let springSnelheidStart1 = 20;
let zwaartekracht1 = 1.8;
 
let versnelling = 0.2;
let val = true;
let bounce;
let bounceR = true;
let bounceL;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler & speler1

  if (keyIsDown(37) && walterwhite_X > -60) { //arrow left
    walterwhite_X = walterwhite_X - 4;
    jessepinkman_X = jessepinkman_X - 4;
  }

  if (keyIsDown(39) && walterwhite_X < 1180) { //arrow right
    walterwhite_X = walterwhite_X + 4;
    jessepinkman_X = jessepinkman_X + 4;
  }
  if (spelerSpringt === false && keyIsDown(38)) { //arrow up

    spelerSpringt = true;
    
    springSnelheid = springSnelheidStart;
    
    }
    
    if (spelerSpringt === true && (walterwhite_Y<720 || jessepinkman_Y<720) ) {
    
    walterwhite_Y = walterwhite_Y - springSnelheid;
    jessepinkman_Y = jessepinkman_Y - springSnelheid;
    
    springSnelheid = springSnelheid - zwaartekracht;
    
    }

    if (walterwhite_Y > 451  || jessepinkman_Y > 451) {
    
      spelerSpringt = false;
      
      } 

  //speler2 & 3

  if (keyIsDown(65) && aang_X > -60) { //A
    aang_X = aang_X - 4;
    sokka_X = sokka_X - 4;
  }

  if (keyIsDown(68) && aang_X < 1180) { //D
    aang_X = aang_X + 4;
    sokka_X = sokka_X + 4;

  }
if (spelerSpringt1 === false && keyIsDown(87)) { //arrow up

  spelerSpringt1 = true;
  
  springSnelheid1 = springSnelheidStart1;
  
  }
  
  if (spelerSpringt1 === true && (aang_Y<720 || sokka_Y<720)) {
  
  aang_Y = aang_Y - springSnelheid1;
  sokka_Y = sokka_Y - springSnelheid1;
  
  springSnelheid1 = springSnelheid1 - zwaartekracht1;
  
  }
  
  if (aang_Y > 451 || sokka_Y > 451) {
  
  spelerSpringt1 = false;
  
  }
  // object2
if ( basketbal_Y < 0 ) {
 val = true;
 bounce = false;
}
if (val === true) {
  basketbal_Y = basketbal_Y +1 +versnelling;
 versnelling = versnelling + 0.2;
 if(versnelling > 5) {
  versnelling = 5;
}
}


if ( basketbal_Y > 600) {
val = false;
bounce = true;
  

}
if (bounce === true) {
  basketbal_Y = basketbal_Y - 3 -versnelling;
  versnelling = versnelling + 2;
  if(versnelling > 5) {
    versnelling = 5;
  }
}
if ( basketbal_X < 0) {
  bounceR = true;
  bounceL = false;
}
if (bounceR === true) {
  basketbal_X = basketbal_X +1 +versnelling;
  versnelling = versnelling + 0.2;
  if(versnelling > 5) {
   versnelling = 5;
 }
}

if (basketbal_X > 1200) {
  bounceR = false;
  bounceL = true;
}

if (bounceL === true) {
  basketbal_X = basketbal_X - 3 -versnelling;
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
  
  image( basketbalveld_img, 0, 0, 1280, 720);
  //rect(0, 0, 1280, 720)

  // object

  image(baskethoopr_img, baskethoopr_X, baskethoopr_Y, 500, 500);


  // object1
  image(baskethoopl_img, baskethoopl_X, baskethoopl_Y, 500, 500);

  // object2

  image(basketbal_img, basketbal_X, basketbal_Y, 40, 40);

  // speler

  image(walterwhite_img, walterwhite_X, walterwhite_Y, 36, 155);

  // speler1

  image(jesssepinkman_img, jessepinkman_X, jessepinkman_Y, 36, 155);

  // speler2

  image(aang_img, aang_X, aang_Y, 36, 155);

  //speler3

  image(sokka_img, sokka_X, sokka_Y, 36, 155);


  // Toon de score
  fill('white');
  textSize(32);
  textAlign(LEFT, TOP);
  text(tegenpartijScore + ' - '+ score, 620, 40);

  if ( tegenpartijScore === 3 || score === 3) {

  spelStatus = GAMEOVER;
  }



  // Toon "BREAKING BAD SCOOORT!" melding voor een korte tijd
  if (showPuntMessage) {
    fill('yellow');
    textSize(48);
    textAlign(CENTER, CENTER);
    text("BREAKING BAD SCOOORT!", width / 2, height / 2);
    if (millis() - messageTimer > 2000) {
      showPuntMessage = false;
    }
  }

  // Toon "AVATAR SCOOORT!" melding voor een korte tijd
  if (showTegenpartijPuntMessage) {
    fill('red');
    textSize(48);
    textAlign(CENTER, CENTER);
    text("AVATAR SCOOORT!", width / 2, height / 2 + 60);
    if (millis() - messageTimer > 2000) {
      showTegenpartijPuntMessage = false;
    }
  }

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
  walterwhite_img = loadImage('players/group-breaking-bad/walterwhite.png');
  baskethoopr_img = loadImage('items/baskethoopr.png');
  baskethoopl_img = loadImage('items/baskethoopl.png');
  jesssepinkman_img = loadImage('players/group-breaking-bad/jessepinkman.png');
  aang_img = loadImage('players/group-avatar/aang.png');
  basketbal_img = loadImage('items/basketbal.png');
  sokka_img = loadImage('players/group-avatar/sokka.png');
  basketbalveld_img = loadImage('basketbalveld.png');
  beginfoto_img = loadImage('beginfoto.png');
  eindfoto_img = loadImage('eindfoto.png');
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
    image( beginfoto_img, 0, 0, 1280, 720);
    fill('white');
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Welkom bij het spel Basket-Multiverse.\n\ Gebruik de knoppen W, A en D toetsen om speler en speler 1 te besturen. \n\ Gebruik de knoppen pijltje omhoog, linker pijltje en rechter pijltje om speler 2 en speler 3 te besturen. \n\ Klik op de ENTER knop om verder te gaan.\n\n MADE BY Mihajlo Vujic & Siem Koolhaas", width / 2, 570);
    

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
    image( eindfoto_img, 0, 0, 1280, 720);
    fill('black');
    textStyle(BOLD);
    textSize(24);
    textAlign (CENTER, CENTER);
    text(" Klik nu op de knop ENTER om opnieuw te spelen",  width / 2, 15);
    
    // Start het spel opnieuw als de Enter knop wordt geklikt
    if ( keyIsPressed && keyCode === ENTER) {
     resetGame();
    }
 }
}

// Nieuwe objectcoördinaten en afmetingen
let lefthoopX = 127;
let lefthoopY = 202;
let righthoopX = 1140;
let righthoopY = 205;

let hoopBreedte = 20;
let hoopHoogte = 185;

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing bal tegen spelers
  if (checkBotsing(walterwhite_X, walterwhite_Y, basketbal_X, basketbal_Y) || 
      checkBotsing(jessepinkman_X, jessepinkman_Y, basketbal_X, basketbal_Y) || 
      checkBotsing(aang_X, aang_Y, basketbal_X, basketbal_Y) || 
      checkBotsing(sokka_X, sokka_Y, basketbal_X, basketbal_Y) || 
      checkBotsing(righthoopX, righthoopY, basketbal_X, basketbal_Y, hoopBreedte, hoopHoogte) ||
      checkBotsing(lefthoopX, lefthoopY, basketbal_X, basketbal_Y, hoopBreedte, hoopHoogte)) {
    // Omkeren van de richtingen van de bal
    bounce = !bounce;
    bounceR = !bounceR;
    bounceL = !bounceL;
  }

  // Check of de bal door het object gaat
  if (checkPunt(basketbal_X, basketbal_Y)) {
    score++;
    showPuntMessage = true;
    messageTimer = millis(); // start de timer
    resetBalPositie(); // reset de positie van de bal
  }  
  else if (checkTegenpartijPunt(basketbal_X, basketbal_Y)) {
    tegenpartijScore++;
    showTegenpartijPuntMessage = true;
    messageTimer = millis(); // start de timer
    resetBalPositie(); // reset de positie van de bal
  }
};

/**
 * Hulpfunctie om botsingen te controleren
 */
var checkBotsing = function (walterwhite_X, walterwhite_Y, basketbal_X, basketbal_Y, spelerBreedte = 36, spelerHoogte = 155) {
  // Controleer of de rechthoeken elkaar overlappen
  let objectGrootte = 40;   // Aannemen dat de bal een breedte en hoogte van 70 heeft

  return !(
    walterwhite_X > basketbal_X + objectGrootte ||
    walterwhite_X + spelerBreedte < basketbal_X ||
    walterwhite_Y > basketbal_Y + objectGrootte ||
    walterwhite_Y + spelerHoogte < basketbal_Y
  );
};

/**
 * Muisklik functie
 */
function mousePressed() {
  let x = mouseX;
  let y = mouseY;
  alert('Coördinaten: (' + x + ', ' + y + ')');
}

// Nieuwe objectcoördinaten en afmetingen voor het puntentelling object
let puntObjectX1 = 145;
let puntObjectY1 = 330;
let puntObjectX2 = 210;
let puntObjectY2 = 373;

let tegenpartijObjectX1 = 1070;
let tegenpartijObjectY1 = 325;
let tegenpartijObjectX2 = 1130;
let tegenpartijObjectY2 = 375;


let score = 0;
let tegenpartijScore = 0;
let showPuntMessage = false;
let showTegenpartijPuntMessage = false;
let messageTimer = 0;

// Startpositie van de bal
let balStartX = 610;
let balStartY = 200;

// Huidige positie van de bal
let basketbal_X = balStartX;
let basketbal_Y = balStartY;

/**
 * Verplaatst de bal naar de startpositie
 */
var resetBalPositie = function () {
  basketbal_X = balStartX;
  basketbal_Y = balStartY;
};

var resetGame = function () {
  spelStatus = STARTSCHERM;
  score = 0;
  tegenpartijScore = 0;
  resetBalPositie();
};

/**
 * Hulpfunctie om te controleren of de bal door het eerste object gaat
 */
var checkPunt = function (balX, balY) {
  return (balX > puntObjectX1 && balX < puntObjectX2 && balY > puntObjectY1 && balY < puntObjectY2);
};

/**
 * Hulpfunctie om te controleren of de bal door het tweede object gaat
 */
var checkTegenpartijPunt = function (balX, balY) {
  return (balX > tegenpartijObjectX1 && balX < tegenpartijObjectX2 && balY > tegenpartijObjectY1 && balY < tegenpartijObjectY2);
};
