


class Prodotto {
    constructor(nome, descrizione, brand, immagine, prezzo) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.brand = brand;
        this.immagine = immagine;
        this.prezzo = prezzo + "€";
    }

    newProdotto() {
        let card = document.createElement("div");
        card.className = "card col-12 col-sm-6 col-md-4 col-lg-2 mx-1 my-1";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        let div = document.createElement("div");
        div.className = "card-title text-center";
        div.innerHTML = this.nome;
        cardBody.appendChild(div);

        let p = document.createElement("p");
        p.innerHTML = this.descrizione;
        cardBody.appendChild(p);

        let img = document.createElement("img");
        img.src = this.immagine;
        img.className = "card-img mh-40";
        cardBody.appendChild(img);

        let prezzo = document.createElement("p");
        prezzo.innerHTML = this.prezzo;
        cardBody.appendChild(prezzo);

        document.querySelector("#container-principale").appendChild(card);
    }                       
}

    
//Esempio di creazione del prodotto    

let prodotto1 = new Prodotto (
    "Prodotto",
    "Bla bla bla Bla bla bla Bla",
    "Random",  
    "https://picsum.photos/seed/picsum/200/300",
    1
);
    
let prodotto2 = new Prodotto (
    "Prodotto2",
    "hehe tototo totot",
    "Randomss",  
    "https://picsum.photos/seed/picsum/200/300",
    2
);
        
        
    prodotto1.newProdotto();
    prodotto1.newProdotto();
    prodotto1.newProdotto();
    prodotto1.newProdotto();
    prodotto2.newProdotto();
        

    