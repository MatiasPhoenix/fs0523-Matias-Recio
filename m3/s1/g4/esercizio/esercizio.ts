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
        saldo:boolean    
}

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

async function cercaConId(number:number){
    let mostra = await call();
    console.log(mostra[number]);
}

cercaConId(4);