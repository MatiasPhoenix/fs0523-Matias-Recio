abstract class LavoratoreAutonomo {
    constructor(public codredd:number,public redditoannuolordo:number,public tasseinps:number,public tasseirpef:number){
    }

    
    abstract getUtileTasse():number
        
    abstract getTasseInps():number

    abstract getTasseIrpef():number

    abstract getRedditoAnnuoNetto():number

}

class lavoratore extends LavoratoreAutonomo{
    getUtileTasse(): number {
        
        throw new Error("Method not implemented.");
    }
    getTasseInps(): number {
        throw new Error("Method not implemented.");
    }
    getTasseIrpef(): number {
        throw new Error("Method not implemented.");
    }
    getRedditoAnnuoNetto(): number {
        throw new Error("Method not implemented.");
    }
    constructor( codredd:number, redditoannuolordo:number, tasseinps:number, tasseirpef:number){
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }




}