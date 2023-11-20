"use strict";
let player1 = 0;
let player2 = 0;
let player1Num = Math.ceil(Math.random() * (100 - 1) + 1);
player1 = player1Num;
console.log("Giocatore 1 ha scelto: " + player1);
let player2Num = Math.ceil(Math.random() * (100 - 1) + 1);
player2 = player2Num;
console.log("Giocatore 2 ha scelto: " + player2);
let numeroConfronto = Math.ceil(Math.random() * (100 - 1) + 1);
function risultatoGioco(player1, player2, numeroConfronto) {
    if ((numeroConfronto - player1) > (numeroConfronto - player2)) {
        console.log("Il giocatore 2 ha vinto!");
    }
    else if ((numeroConfronto - player1) < (numeroConfronto - player2)) {
        console.log("Il giocatore 1 ha vinto!");
    }
    else {
        console.log("Capperetti! qui c'è un pareggio!");
    }
}
;
