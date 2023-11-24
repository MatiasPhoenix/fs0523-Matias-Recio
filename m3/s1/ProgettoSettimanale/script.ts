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

//class dispositivo Smartphone (con l'implementazione di Sim)
class Smartphone implements Sim {
    
    constructor(public carica:number, public numeroChiamate: number, public costoMinuto:number){}
    
    ricarica(euro: number): void {
        this.carica += euro
        return;
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

//Oggetto dispositivo n°1 (istanza uno)
let smartphoneGX = new Smartphone(0, 0, 0.5) //class dispositivo creato
smartphoneGX.ricarica(12); //ricarica effettuata
console.log(smartphoneGX); //controllo
console.log("Credito residuo "+ smartphoneGX.numero404()); //controllo verifica credito residuo
smartphoneGX.chiamata(2); //chiamata #1
smartphoneGX.chiamata(1); //chiamata #2
smartphoneGX.chiamata(4); //chiamata #3
console.log("Effettuate " + smartphoneGX.getNumeroChiamate()+ " chiamate fin'ora"); //controllo n° di chiamate
smartphoneGX.azzeraChiamate(); //azzera chiamate (che sono a 3)
console.log("Effettuate " + smartphoneGX.getNumeroChiamate()+ " chiamate fin'ora"); //controllo chiamate (adesso sono a zero)











