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
/* globale variabelen die je gebruikt in je game */
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


let gejuich_audio; // geluid
let gameover_audio; // geluid
let intro_audio; // geluid

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

let score = 0;
let tegenpartijScore = 0;
let showPuntMessage = false;
let showTegenpartijPuntMessage = false;
let messageTimer = 0;

// startpositie spelers
let walterwhitestart_X = 700;
let walterwhitestart_Y = 451;

let jessepinkmanstart_X = 900;
let jessepinkmanstart_Y = 451;

let aangstart_X = 350;
let aangstart_Y = 451;

let sokkastart_X = 150;
let sokkastart_Y = 451;


// Startpositie van de bal
let balStartX = 610;
let balStartY = 200;

// Huidige positie van de bal
let basketbal_X = balStartX;
let basketbal_Y = balStartY;

let lefthoopX = 127;
let lefthoopY = 202;
let righthoopX = 1140;
let righthoopY = 205;

let hoopBreedte = 20;
let hoopHoogte = 185;

let puntObjectX1 = 145;
let puntObjectY1 = 330;
let puntObjectX2 = 210;
let puntObjectY2 = 373;

let tegenpartijObjectX1 = 1070;
let tegenpartijObjectY1 = 325;
let tegenpartijObjectX2 = 1130;
let tegenpartijObjectY2 = 375;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler & speler1
  if (keyIsDown(37) && walterwhite_X > -60) { // arrow left
    walterwhite_X -= 4;
    jessepinkman_X -= 4;
  }

  if (keyIsDown(39) && walterwhite_X < 1180) { // arrow right
    walterwhite_X += 4;
    jessepinkman_X += 4;
  }

  if (!spelerSpringt && keyIsDown(38)) { // arrow up
    spelerSpringt = true;
    springSnelheid = springSnelheidStart;
  }

  if (spelerSpringt && (walterwhite_Y < 720 || jessepinkman_Y < 720)) {
    walterwhite_Y -= springSnelheid;
    jessepinkman_Y -= springSnelheid;
    springSnelheid -= zwaartekracht;
  }

  if (walterwhite_Y > 451 || jessepinkman_Y > 451) {
    spelerSpringt = false;
  }

  // speler2 & 3
  if (keyIsDown(65) && aang_X > -60) { // A
    aang_X -= 4;
    sokka_X -= 4;
  }

  if (keyIsDown(68) && aang_X < 1180) { // D
    aang_X += 4;
    sokka_X += 4;
  }

  if (!spelerSpringt1 && keyIsDown(87)) { // W
    spelerSpringt1 = true;
    springSnelheid1 = springSnelheidStart1;
  }

  if (spelerSpringt1 && (aang_Y < 720 || sokka_Y < 720)) {
    aang_Y -= springSnelheid1;
    sokka_Y -= springSnelheid1;
    springSnelheid1 -= zwaartekracht1;
  }

  if (aang_Y > 451 || sokka_Y > 451) {
    spelerSpringt1 = false;
  }

  // basketbal
  if (basketbal_Y < 0) {
    val = true;
    bounce = false;
  }

  if (val) {
    basketbal_Y += 1 + versnelling;
    versnelling += 0.2;
    if (versnelling > 5) {
      versnelling = 5;
    }
  }

  if (basketbal_Y > 600) {
    val = false;
    bounce = true;
  }

  if (bounce) {
    basketbal_Y -= 3 + versnelling;
    versnelling += 2;
    if (versnelling > 5) {
      versnelling = 5;
    }
  }

  if (basketbal_X < 0) {
    bounceR = true;
    bounceL = false;
  }

  if (bounceR) {
    basketbal_X += 1 + versnelling;
    versnelling += 0.2;
    if (versnelling > 5) {
      versnelling = 5;
    }
  }

  if (basketbal_X > 1200) {
    bounceR = false;
    bounceL = true;
  }

  if (bounceL) {
    basketbal_X -= 3 + versnelling;
    versnelling += 2;
    if (versnelling > 5) {
      versnelling = 5;
    }
  }
};

/**
 * Checkt botsingen en verwerkt score
 */
var verwerkBotsing = function () {
  // botsing bal tegen spelers
  if (checkBotsing(walterwhite_X, walterwhite_Y, basketbal_X, basketbal_Y) || 
      checkBotsing(jessepinkman_X, jessepinkman_Y, basketbal_X, basketbal_Y) || 
      checkBotsing(aang_X, aang_Y, basketbal_X, basketbal_Y) || 
      checkBotsing(sokka_X, sokka_Y, basketbal_X, basketbal_Y) || 
      checkBotsing(righthoopX, righthoopY, basketbal_X, basketbal_Y, hoopBreedte, hoopHoogte) ||
      checkBotsing(lefthoopX, lefthoopY, basketbal_X, basketbal_Y, hoopBreedte, hoopHoogte)) {
    bounce = !bounce;
    bounceR = !bounceR;
    bounceL = !bounceL;
  }

  // Check of de bal door het object gaat
  if (checkPunt(basketbal_X, basketbal_Y)) {
    gejuich_audio.play();
    score++;
    showPuntMessage = true;
    messageTimer = millis(); // start de timer
    resetBalPositie(); // reset de positie van de bal
  } else if (checkTegenpartijPunt(basketbal_X, basketbal_Y)) {
    tegenpartijScore++;
    gejuich_audio.play();
    showTegenpartijPuntMessage = true;
    messageTimer = millis(); // start de timer
    resetBalPositie(); // reset de positie van de bal
  }
};

/**
 * Hulpfunctie om botsingen te controleren
 */
var checkBotsing = function (spelerX, spelerY, objectX, objectY, spelerBreedte = 36, spelerHoogte = 155) {
  let objectGrootte = 40; // Aannemen dat de bal een breedte en hoogte van 70 heeft
  return !(
    spelerX > objectX + objectGrootte ||
    spelerX + spelerBreedte < objectX ||
    spelerY > objectY + objectGrootte ||
    spelerY + spelerHoogte < objectY
  );
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

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  image(basketbalveld_img, 0, 0, 1280, 720);

  // objecten
  image(baskethoopr_img, baskethoopr_X, baskethoopr_Y, 500, 500);
  image(baskethoopl_img, baskethoopl_X, baskethoopl_Y, 500, 500);
  image(basketbal_img, basketbal_X, basketbal_Y, 40, 40);

  // spelers
  image(walterwhite_img, walterwhite_X, walterwhite_Y, 36, 155);
  image(jesssepinkman_img, jessepinkman_X, jessepinkman_Y, 36, 155);
  image(aang_img, aang_X, aang_Y, 36, 155);
  image(sokka_img, sokka_X, sokka_Y, 36, 155);

  // Toon de score
  fill('white');
  textSize(32);
  textAlign(LEFT, TOP);
  text(tegenpartijScore + ' - ' + score, 620, 40);

  if (tegenpartijScore === 1 || score === 1) {
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

/**
 * Verplaatst de bal naar de startpositie
 */
var resetBalPositie = function () {
  basketbal_X = balStartX;
  basketbal_Y = balStartY;
};

var resetWalterWhite = function() {
  walterwhite_X = walterwhitestart_X;
  walterwhite_Y = walterwhitestart_Y;
};

var resetJessePinkman = function() {
  jessepinkman_X = jessepinkmanstart_X;
  jessepinkman_Y = jessepinkmanstart_Y;
};

var resetAang = function() {
 aang_X = aangstart_X;
 aang_Y = aangstart_Y;
};

var resetSokka = function() {
  sokka_X = sokkastart_X;
  sokka_Y = sokkastart_Y;
};

var resetGame = function () {
  spelStatus = STARTSCHERM;
  score = 0;
  tegenpartijScore = 0;
  resetBalPositie();
  resetWalterWhite();
  resetJessePinkman();
  resetAang();
  resetSokka();
};

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  createCanvas(1280, 720); // Maak een canvas van 1280x720
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
  gejuich_audio = new Audio('gejuich.mp3');
  gameover_audio = new Audio('gameover.mp3');
  intro_audio = new Audio('intro.mp3');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === STARTSCHERM) {
    // toon STARTSCHERM met uitleg
    gameover_audio.pause();
    intro_audio.play();
    image(beginfoto_img, 0, 0, 1280, 720);
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
    intro_audio.pause();
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
  } else if (spelStatus === GAMEOVER) {
    // GAME OVER SCHERM
    gameover_audio.play();
    image(eindfoto_img, 0, 0, 1280, 720);
    fill('black');
    textStyle(BOLD);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(" Klik nu op de knop ENTER om opnieuw te spelen", width / 2, 15);

    // Start het spel opnieuw als de Enter knop wordt geklikt
    if (keyIsPressed && keyCode === ENTER) {
      resetGame();
    }
  }
}

