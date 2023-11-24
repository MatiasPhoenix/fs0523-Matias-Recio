interface Sim {
    carica:number, //carica (soldi) della sim
    numeroChiamate:number, //quante chiamate ha ricevuto la sim
    costoMinuto:number //il costo, al minuto, quando si effettuano chiamate

    //metodi del interface
    ricarica(euro:number):void;
    
    numero404():string;

    getNumeroChiamate():number;

    chiamata(min:number):void;

    azzeraChiamate():void;

}

//Oggetto dispositivo Smartphone
class Smartphone implements Sim {
    
    constructor(public carica:number, public numeroChiamate: number, public costoMinuto:number){}
    
    ricarica(euro: number): void {
        let credito = this.carica;
        credito += euro;
        return
    }
    numero404(): string {
        let creditoResiduo;
        let soldiSim = this.carica;
        creditoResiduo = soldiSim + "€";
        return creditoResiduo
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    chiamata(min: number): void {
        this.numeroChiamate ++;
        let costoChiamata = this.costoMinuto * min;
        this.carica -= costoChiamata;
        return;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        return
    }
    
}

//Oggetto dispositivo n°1
let smartphoneA = new Smartphone(10, 0, 0.5)



