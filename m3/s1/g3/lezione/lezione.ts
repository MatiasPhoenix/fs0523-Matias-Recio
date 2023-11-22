class Test {
    constructor(private price:number) {}
        
    get getPrice():string {
        return this.price + "€";
        //il "get" deve restituire un valore e non può avere parametri
        //non accetta parametri
    }

    set setPrice(newPrice:number){
        this.price = newPrice;
        //accetta SOLO un parametro
        //non accetta parametri in uscita
    }
}

let test = new Test(10);

test.setPrice = 69;

console.log(test.getPrice);
