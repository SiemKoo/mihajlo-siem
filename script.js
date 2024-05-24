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




let img;  // plaatje
let img1; // plaatje
let img2; // plaatje
let img3; // plaatje
let img4; // plaatje
let img5; // plaatje
let img6; // plaatje
let img7; // plaatje
let img8; // plaatje
let img9; // plaatje


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

  image(img5, objectX2, objectY2, 40, 40);

  // speler

  image(img, spelerX, spelerY, 36, 155);

  // speler1

  image(img3, spelerX1, spelerY1, 36, 155);

  // speler2

  image(img4, spelerX2, spelerY2, 36, 155);

  //speler3

  image(img6, spelerX3, spelerY3, 36, 155);


  // Toon de score
  fill('white');
  textSize(32);
  textAlign(LEFT, TOP);
  text(tegenpartijScore + ' - '+ score, 620, 40);

  if ( tegenpartijScore === 1 || score === 1) {

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
  img = loadImage('players/group-breaking-bad/walterwhite.png');
  img1 = loadImage('items/baskethoopr.png');
  img2 = loadImage('items/baskethoopl.png');
  img3 = loadImage('players/group-breaking-bad/jessepinkman.png');
  img4 = loadImage('players/group-avatar/aang.png');
  img5 = loadImage('items/basketball.png');
  img6 = loadImage('players/group-avatar/sokka.png');
  img7 = loadImage('basketballcourt.png');
  img8 = loadImage('beginfoto.png');
  img9 = loadImage('eindfoto.png');
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
    image( img8, 0, 0, 1280, 720);
    fill('white');
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Welkom bij het spel Basket-Multiverse.\n\ Gebruik de knoppen W, A en D toetsen om speler en speler 1 te besturen. \n\ Gebruik de knoppen pijltje omhoog, linker pijltje en rechter pijltje om speler 2 en speler 3 te besturen. \n\ Klik op de ENTER knop om verder te gaan", width / 2, 560);


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
    image( img9, 0, 0, 1280, 720);
    fill('black');
    background(200)
    textStyle(BOLD);
    textSize(32);
    textAlign (CENTER, CENTER);
    text(" Klik nu op de knop ENTER om opnieuw te spelen",  width / 2, 300);
    
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
  if (checkBotsing(spelerX, spelerY, objectX2, objectY2) || 
      checkBotsing(spelerX1, spelerY1, objectX2, objectY2) || 
      checkBotsing(spelerX2, spelerY2, objectX2, objectY2) || 
      checkBotsing(spelerX3, spelerY3, objectX2, objectY2) || 
      checkBotsing(righthoopX, righthoopY, objectX2, objectY2, hoopBreedte, hoopHoogte) ||
      checkBotsing(lefthoopX, lefthoopY, objectX2, objectY2, hoopBreedte, hoopHoogte)) {
    // Omkeren van de richtingen van de bal
    bounce = !bounce;
    bounceR = !bounceR;
    bounceL = !bounceL;
  }

  // Check of de bal door het object gaat
  if (checkPunt(objectX2, objectY2)) {
    score++;
    showPuntMessage = true;
    messageTimer = millis(); // start de timer
    resetBalPositie(); // reset de positie van de bal
  }  
  else if (checkTegenpartijPunt(objectX2, objectY2)) {
    tegenpartijScore++;
    showTegenpartijPuntMessage = true;
    messageTimer = millis(); // start de timer
    resetBalPositie(); // reset de positie van de bal
  }
};

/**
 * Hulpfunctie om botsingen te controleren
 */
var checkBotsing = function (spelerX, spelerY, objectX2, objectY2, spelerBreedte = 36, spelerHoogte = 155) {
  // Controleer of de rechthoeken elkaar overlappen
  let objectGrootte = 40;   // Aannemen dat de bal een breedte en hoogte van 70 heeft

  return !(
    spelerX > objectX2 + objectGrootte ||
    spelerX + spelerBreedte < objectX2 ||
    spelerY > objectY2 + objectGrootte ||
    spelerY + spelerHoogte < objectY2
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
let objectX2 = balStartX;
let objectY2 = balStartY;

/**
 * Verplaatst de bal naar de startpositie
 */
var resetBalPositie = function () {
  objectX2 = balStartX;
  objectY2 = balStartY;
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
