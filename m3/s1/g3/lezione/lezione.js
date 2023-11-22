"use strict";
class Test {
    constructor(price) {
        this.price = price;
    }
    get getPrice() {
        return this.price + "€";
        //il "get" deve restituire un valore e non può avere parametri
        //non accetta parametri
    }
    set setPrice(newPrice) {
        this.price = newPrice;
        //accetta SOLO un parametro
        //non accetta parametri in uscita
    }
}
let test = new Test(10);
test.setPrice = 69;
console.log(test.getPrice);
