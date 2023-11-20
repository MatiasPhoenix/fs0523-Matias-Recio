"use strict";
let player1 = 0;
let player2 = 0;
let player1Num = Math.ceil(Math.random() * (100 - 1) + 1);
player1 = player1Num;
console.log("Giocatore 1 ha scelto: " + player1);
let player2Num = Math.ceil(Math.random() * (100 - 1) + 1);
player2 = player2Num;
console.log("Giocatore 2 ha scelto: " + player2);
let numeroGioco = Math.ceil(Math.random() * (100 - 1) + 1);
console.log("Il numero da indovinare è " + numeroGioco);
// let numeroGioco:number;
function risultatoGioco(player1, player2, numeroGioco) {
    let pippo = (numeroGioco + player1) - 100;
    console.log(pippo);
    let paperino = (numeroGioco + player2) - 100;
    console.log(paperino);
    if (pippo < paperino) {
        return "Il giocatore 1 ha vinto!";
    }
    else if (pippo > paperino) {
        return "Il giocatore 2 ha vinto!";
    }
    else {
        return "Capperetti! qui c'è un pareggio!";
    }
}
;
let vincitore = risultatoGioco(player1, player2, numeroGioco);
console.log(vincitore);
/*

numeroMax=10
numScelto=7
g1=3
g2=8

10+7= 3 - g2(8) = -5.

*/ 
