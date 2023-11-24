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
//Oggetto dispositivo n°1
let smartphoneGX = new Smartphone(0, 0, 0.5); //class dispositivo creato
smartphoneGX.ricarica(12); //ricarica effettuata
console.log(smartphoneGX); //controllo
console.log("Credito residuo " + smartphoneGX.numero404()); //controllo verifica credito residuo
smartphoneGX.chiamata(2); //chiamata #1
smartphoneGX.chiamata(1); //chiamata #2
smartphoneGX.chiamata(4); //chiamata #3
console.log("Effettuate " + smartphoneGX.getNumeroChiamate() + " chiamate fin'ora"); //controllo n° di chiamate
smartphoneGX.azzeraChiamate(); //azzera chiamate (che sono a 3)
console.log("Effettuate " + smartphoneGX.getNumeroChiamate() + " chiamate fin'ora"); //controllo chiamate (adesso sono a zero)
