"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
class lavoratore extends LavoratoreAutonomo {
    getUtileTasse() {
        throw new Error("Method not implemented.");
    }
    getTasseInps() {
        throw new Error("Method not implemented.");
    }
    getTasseIrpef() {
        throw new Error("Method not implemented.");
    }
    getRedditoAnnuoNetto() {
        throw new Error("Method not implemented.");
    }
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
}
