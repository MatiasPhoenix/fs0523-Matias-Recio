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
    return abbDaVendere;
}

