// type per far contento typecript
type abbigliamentoX = {
    
        id:number,
        codProd:string,
        collezione:string,
        capo:string,
        modello:string,
        quantita:number,
        colore:string,
        prezzoIvaEsclusa:number,
        prezzoIvaInclusa:number,
        disponibile:boolean,
        saldo:number    
}

//fetch del json
async function call():Promise<abbigliamentoX[]> { 
    let res:Response = await fetch('abbigliamento.json');
    let abbDaVendere:abbigliamentoX[] = await res.json();
    
    // abbDaVendere.forEach(abbDaVendere => console.log(abbDaVendere));
    return abbDaVendere;
} call();

// async function mostra(){
//     let mostra = await call();
//     console.log(mostra);
// }


//funzione per cercare l'indumento tramite ID
async function cercaConId(number:number){
    let mostra = await call();
    console.log(mostra[number]);
    return mostra[number];
}

cercaConId(4);

////////////////////////////////

class AbbigliamentoX {
    id: number;
    codProd: string;
    collezione: string;
    capo: string;
    modello: string;
    quantita: number;
    colore: string;
    prezzoIvaEsclusa: number;
    prezzoIvaInclusa: number;
    disponibile: boolean;
    saldo: number;
  
    

    constructor (
        id:number,
        codProd:string,
        collezione:string,
        capo:string,
        modello:string,
        quantita:number,
        colore:string,
        prezzoIvaEsclusa:number,
        prezzoIvaInclusa:number,
        disponibile:boolean,
        saldo:number 
    ){
        this.id = id;
        this.codProd = codProd;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoIvaEsclusa = prezzoIvaEsclusa;
        this.prezzoIvaInclusa = prezzoIvaInclusa;
        this.disponibile = disponibile;
        this.saldo = saldo
    }

    getSaldoCapo(amount:number):number{
        let saldo = this.getSaldoCapo(amount);
        this.prezzoIvaInclusa -= saldo;
        return saldo = amount;
        
    }
        

    
}

let newMaglia:AbbigliamentoX = new AbbigliamentoX (10, "primavera", "Primavera", "Maglietta", "Tshit", 124, "Marrone", 10 ,10, true, 0);
newMaglia.getSaldoCapo(2)

console.log(newMaglia);


