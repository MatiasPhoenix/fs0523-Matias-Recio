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
function cercaConId(number) {
    return __awaiter(this, void 0, void 0, function* () {
        let mostra = yield call();
        console.log(mostra[number]);
    });
}
cercaConId(4);
//# sourceMappingURL=esercizio.js.map