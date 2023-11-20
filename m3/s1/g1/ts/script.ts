let player1:number = 0;
let player2:number = 0;

let player1Num = Math.ceil(Math.random() * (100-1)+1);
player1 = player1Num;
console.log("Giocatore 1 ha scelto: " + player1);

let player2Num = Math.ceil(Math.random() * (100-1)+1);
player2 = player2Num;
console.log("Giocatore 2 ha scelto: " + player2);

let numeroGioco = Math.ceil(Math.random() * (100-1)+1);
console.log(numeroGioco);
// let numeroGioco:number;


function risultatoGioco (player1:number, player2:number, numeroGioco:number):string | void {
    let numeroConfronto:number = 100;
    let pippo:number = numeroConfronto + numeroGioco;
    if ((pippo - player1) < (pippo - player2)) {
        return "Il giocatore 1 ha vinto!";
    } else if ((pippo - player1) > (pippo - player2)) {
        return "Il giocatore 2 ha vinto!";
    } else {
        return "Capperetti! qui c'è un pareggio!";
    }
};

let vincitore:string | void = risultatoGioco(player1, player2, numeroGioco);
console.log(vincitore);
