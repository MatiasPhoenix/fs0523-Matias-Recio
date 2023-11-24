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





