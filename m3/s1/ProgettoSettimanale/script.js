"use strict";
//Oggetto dispositivo Smartphone
class Smartphone {
    constructor(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
    ricarica(euro) {
        let credito = this.carica;
        credito += euro;
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
let smartphoneA = new Smartphone(10, 0, 0.5);
// let smartphoneA:Sim = {
//     carica: 10,
//     numeroChiamate: 0,
//     costoMinuto: 0.5,
//     ricarica: function (euro: number): void {
//         let credito = this.carica;
//         credito += euro;
//         return
//     },
//     numero404: function (): string {
//         let creditoResiduo;
//         let soldiSim = this.carica;
//         creditoResiduo = soldiSim + "€";
//         return creditoResiduo
//     },
//     getNumeroChiamate: function (): number {
//         return this.numeroChiamate
//     },
//     chiamata: function (min: number): void {
//         this.numeroChiamate ++;
//         let costoChiamata = this.costoMinuto * min;
//         this.carica -= costoChiamata;
//         return
//     },
//     azzeraChiamate: function (): void {
//         this.numeroChiamate = 0;
//         return
//     }
// }
