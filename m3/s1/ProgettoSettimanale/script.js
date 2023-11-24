"use strict";
//class dispositivo Smartphone (con l'implementazione di Sim)
class Smartphone {
    constructor(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
    ricarica(euro) {
        this.carica += euro;
        return;
    }
    numero404() {
        let creditoResiduo;
        let soldiSim = this.carica;
        creditoResiduo = soldiSim + "€";
        return creditoResiduo;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        this.numeroChiamate++;
        let costoChiamata = this.costoMinuto * min;
        this.carica -= costoChiamata;
        return;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        return;
    }
}
//Oggetto dispositivo n°1 (istanza uno)
let smartphoneGX = new Smartphone(0, 0, 0.5); //class dispositivo creato
console.log(smartphoneGX); //controllo dispositivo appena creato
console.log("-----");
smartphoneGX.ricarica(12); //ricarica effettuata
console.log(smartphoneGX); //controllo
console.log("Ricarica appena fatta. Credito residuo " + smartphoneGX.numero404()); //controllo verifica credito residuo
smartphoneGX.chiamata(2); //chiamata #1
smartphoneGX.chiamata(1); //chiamata #2
smartphoneGX.chiamata(4); //chiamata #3
console.log("-----");
console.log(smartphoneGX);
console.log("Effettuate " + smartphoneGX.getNumeroChiamate() + " chiamate fin'ora"); //controllo n° di chiamate
smartphoneGX.azzeraChiamate(); //azzera chiamate (che sono a 3)
console.log("-----");
console.log(smartphoneGX);
console.log("Rubrica azzerata. Effettuate " + smartphoneGX.getNumeroChiamate() + " chiamate fin'ora"); //controllo chiamate (adesso sono a zero)
console.log("--------------------------------------------------------------------");
//Oggetto dispositivo n°2 (istanza due)
let smartphoneWX = new Smartphone(0, 0, 0.2); //class dispositivo creato
console.log(smartphoneWX); //controllo dispositivo appena creato
console.log("-----");
smartphoneWX.ricarica(42); //ricarica effettuata
console.log(smartphoneWX); //controllo
console.log("Ricarica appena fatta. Credito residuo " + smartphoneWX.numero404()); //controllo verifica credito residuo
smartphoneWX.chiamata(2); //chiamata #1
smartphoneWX.chiamata(1); //chiamata #2
smartphoneWX.chiamata(4); //chiamata #3
smartphoneWX.chiamata(7); //chiamata #4
smartphoneWX.chiamata(10); //chiamata #5
smartphoneWX.chiamata(3); //chiamata #6
console.log("-----");
console.log(smartphoneWX);
console.log("Effettuate " + smartphoneWX.getNumeroChiamate() + " chiamate fin'ora"); //controllo n° di chiamate
smartphoneWX.azzeraChiamate(); //azzera chiamate (che sono a 3)
console.log("-----");
console.log(smartphoneWX);
console.log("Rubrica azzerata. Effettuate " + smartphoneWX.getNumeroChiamate() + " chiamate fin'ora"); //controllo chiamate (adesso sono a zero)
//Oggetto dispositivo n°3 (istanza tre)
let smartphoneZX = new Smartphone(5, 0, 0.5); //class dispositivo creato
