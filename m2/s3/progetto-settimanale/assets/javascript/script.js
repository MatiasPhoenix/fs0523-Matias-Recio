// Stai creando la parte front-end di uno shop online. In particolare sarai responsabile della creazione di un back-office, dove gli amministratori possono aggiungere e modificare i prodotti.
// L’obiettivo di oggi è connettere un’interfaccia statica alle API per poter ricevere prodotti, crearne di nuovi, modificarli una volta creati e cancellarli all’occorrenza.
// Questo è l’endpoint principale:
// https://striveschool-api.herokuapp.com/api/product/
// Questo è il modello di un prodotto:

// Per creare nuovi prodotti dovrai partire da questo modello come riferimento, e formarlo con alcune delle proprietà richieste per poi inviarlo come payload della chiamata POST.
// OGNI CHIAMATA DOVRÀ ESSERE AUTENTICATA! L’autenticazione di queste API è una “Token Based Authentication” per rendere privato l’accesso ai suoi contenuti. Senza essere autenticato non potrai ottenere i dati di cui hai bisogno.
// Per prima cosa dovrai recuperare un tuo token personale registrandoti su: https://strive.school/studentlogin
// Il token dovrà venire utilizzato come "authorization" header.
// Obiettivi generali:
// Avere una pagina back-office, in cui si potranno inserire i prodotti specificando i parametri obbligatori e facoltativi.
// Una homepage, dove l’utente possa vedere i prodotti disponibili
// Una pagina di dettaglio in cui visualizzare tutti i dettagli del prodotto.
// Task:
// Nella pagina di back-office: usa POST su /product con un payload per creare una nuova risorsa.
// Aggiungi un bottone per la funzionalità di modifica di un prodotto già creato in precedenza (usa una PUT su /product/[PRODUCT_ID]).
// Aggiungi un bottone per la cancellazione di uno specifico prodotto già esistente (usa DELETE su /product/[PRODUCT_ID]).
// I tasti “modifica” e “cancella”  dovranno essere visibili SOLO se si è in modalità di modifica della risorsa.
// Aggiungi una validazione di base per la creazione/modifica del prodotto nel form.
// Aggiungi un bottone “Reset” per resettare il form.
// Nella Homepage: premendo un bottone “modifica” su un prodotto si dovrà poterlo modificare.
// Nella pagina Dettaglio: A questa pagina ci si arriverà cliccando un bottone “Scopri di più” sulla card in homepage.

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUwOGM4Y2Q2YWJmYTAwMThiN2ViMjUiLCJpYXQiOjE2OTk3Nzc2NzcsImV4cCI6MTcwMDk4NzI3N30.9A8S4q86eIk9-WBwpQTrANyhasyPyovhuEbcmTDPhAg"
// }
// })

const apiUrl = "https://striveschool-api.herokuapp.com/api/product"
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUwOGM4Y2Q2YWJmYTAwMThiN2ViMjUiLCJpYXQiOjE2OTk3Nzc2NzcsImV4cCI6MTcwMDk4NzI3N30.9A8S4q86eIk9-WBwpQTrANyhasyPyovhuEbcmTDPhAg"

function getAndDisplayProducts() {
  fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((products) => {
      const productList = document.getElementById("productList")

      productList.innerHTML = ""
      //Prodotti piazzati sullo schermo
      products.forEach((product) => {
        const listItem = document.createElement("li")
        listItem.classList.add("col-2");
        listItem.classList.add("card");
        listItem.classList.add("mx-3");
        listItem.classList.add("my-4");
        

        const imgElement = document.createElement("img")
        imgElement.src = "assets/images/yourBeer.jpg"
        imgElement.alt = `Immagine di ${product.name}`
        imgElement.classList.add("product-image")
        

        listItem.appendChild(imgElement)
        
        //Creazione delle card dei prodotti
        const textInfo = document.createElement("div")
        textInfo.innerHTML = `
          <h3 class="card-title text-center"><strong> ${product.name}</strong></h3>
          <p class="list-group-item"><strong>Prezzo:</strong> ${product.price}€</p>
          <p class="list-group-item"><strong>Marca:</strong> ${product.brand}</p>
          <p class="card-text"><strong>Descrizione:</strong> <br> ${product.description}</p>
          
        `
        textInfo.classList.add("card-body")
        listItem.appendChild(textInfo)
        productList.appendChild(listItem)

        //Cancellare prodotto
        const removeButton = document.createElement("button");
        removeButton.textContent = "Rimuovi";
        removeButton.addEventListener("click", () => removeProduct(product._id)); 
        removeButton.classList.add("btnRemove");
        removeButton.classList.add("btn");
        removeButton.classList.add("btn-danger");
        textInfo.appendChild(removeButton);

        //Modifica prodotto
        const editButton = document.createElement("a");
        editButton.textContent = "Modifica";
        // editButton.addEventListener("click", () => editProduct(product._id));        
        editButton.addEventListener('submit', async (event) => {
          event.preventDefault()
          
          const newProduct = {
              name: name.value,
              description: description.value,
              brand: brand.value,
              imageUrl: imgUrl.value,
              price: price.value
          };
          try {

              const resp = await fetch(url, {
                  method,
                  body: JSON.stringify(newProduct),
                  headers: {
                      "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUwOGM4Y2Q2YWJmYTAwMThiN2ViMjUiLCJpYXQiOjE2OTk3Nzc2NzcsImV4cCI6MTcwMDk4NzI3N30.9A8S4q86eIk9-WBwpQTrANyhasyPyovhuEbcmTDPhAg",
                      "Content-Type": "application/json"
                  }
              })
              // window.location.assign("modificaProdotto.html")
              console.log(resp)

          } catch (error) {
              console.log(error)
          }

      });

      
        editButton.classList.add("btnEdit");
        editButton.href = `modificaProdotto.html?id=${product._id}`;
        editButton.classList.add("btn");
        editButton.classList.add("btn-primary");
        textInfo.appendChild(editButton);
      
        listItem.appendChild(imgElement);
        listItem.appendChild(textInfo);
        productList.appendChild(listItem);

        const buttonZone = document.createElement("div");
        buttonZone.classList.add("card-footer");
        listItem.appendChild(buttonZone);
        buttonZone.appendChild(editButton);
        buttonZone.appendChild(removeButton);
        
        
      })
      
    })
    .catch((error) => {
      console.error("Errore durante il recupero dei prodotti:", error)
    })
    
}

function editProduct(id) {
  // Reindirizzamento alla pagina di modifica con l'ID del prodotto nell'URL
  window.location.href = `modificaProdotto.html?id=${id}`;}

//Creazione del prodotto
function addProduct() {
  const name = document.getElementById("name").value
  const price = document.getElementById("price").value
  const imageUrl = document.getElementById("imageUrl").value
  const brand = document.getElementById("brand").value
  const description = document.getElementById("description").value

  const productData = {
    name: name,
    price: price,
    imageUrl: imageUrl,
    brand: brand,
    description: description,
  }

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Prodotto aggiunto :", data)
      getAndDisplayProducts()
    })
    .catch((error) => {
      console.error("Errore durante l'aggiunta del prodotto:", error)
    })
}

//Funzinoe per rimuovere un prodotto
function removeProduct(product) {
  fetch(apiUrl + "/" + product, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
   .then((response) => response.json())
   .then((data) => {
      console.log("Prodotto rimosso :", data)
      getAndDisplayProducts()
    })
   .catch((error) => {
      console.error("Errore durante la cancellazione del prodotto:", error)
    })
}

getAndDisplayProducts()
console.log()