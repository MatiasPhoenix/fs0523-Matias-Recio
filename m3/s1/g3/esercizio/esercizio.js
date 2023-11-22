"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    get getUtileTasse() {
        return this.codredd;
    }
    get getTasseInps() {
        return this.tasseinps;
    }
    get getTasseIrpef() {
        return this.tasseirpef;
    }
    get getRedditoAnnuoNetto() {
        return this.redditoannuolordo;
    }
}
