"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//fetch del json
function call() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch('abbigliamento.json');
        let abbDaVendere = yield res.json();
        // abbDaVendere.forEach(abbDaVendere => console.log(abbDaVendere));
        return abbDaVendere;
    });
}
call();
// async function mostra(){
//     let mostra = await call();
//     console.log(mostra);
// }
//funzione per cercare l'indumento tramite ID
function cercaConId(number) {
    return __awaiter(this, void 0, void 0, function* () {
        let mostra = yield call();
        console.log(mostra[number]);
        return mostra[number];
    });
}
cercaConId(4);
////////////////////////////////
class AbbigliamentoX {
    constructor(id, codProd, collezione, capo, modello, quantita, colore, prezzoIvaEsclusa, prezzoIvaInclusa, disponibile, saldo) {
        this.id = id;
        this.codProd = codProd;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoIvaEsclusa = prezzoIvaEsclusa;
        this.prezzoIvaInclusa = prezzoIvaInclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    calcolaIva(amount) {
        amount = amount * 1.2;
        return this.prezzoIvaEsclusa = this.prezzoIvaEsclusa + amount;
    }
    getSaldoCapo(amount) {
        let saldo = amount;
        this.saldo = saldo;
        this.prezzoIvaInclusa -= saldo;
        console.log("Questo capo d'abbigliamento è in saldo! Sconto di " + amount + "€");
        return saldo = amount;
    }
}
let newMaglia = new AbbigliamentoX(10, "primavera", "Primavera", "Maglietta", "Tshit", 124, "Marrone", 10, 10, true, 0);
newMaglia.getSaldoCapo(2);
console.log(newMaglia);
//# sourceMappingURL=esercizio.js.map