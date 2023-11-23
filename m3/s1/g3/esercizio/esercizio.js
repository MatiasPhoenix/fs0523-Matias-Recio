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
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
    getTasseInps() {
        throw new Error("Method not implemented.");
    }
    getTasseIrpef() {
        throw new Error("Method not implemented.");
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getTasse;
    }
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
}
