abstract class LavoratoreAutonomo {
    constructor(public codredd:number,public redditoannuolordo:number,public tasseinps:number,public tasseirpef:number){
    }

    
    get getUtileTasse():number{
        return this.codredd;
    }

    get getTasseInps():number{
        return this.tasseinps;
    }

    get getTasseIrpef():number{
        return this.tasseirpef;
    }

    get getRedditoAnnuoNetto():number{
        return this.redditoannuolordo;
    }

}

