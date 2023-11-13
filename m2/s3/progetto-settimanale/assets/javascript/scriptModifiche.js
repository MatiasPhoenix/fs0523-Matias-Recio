const apiUrl = "https://striveschool-api.herokuapp.com/api/product";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUwOGM4Y2Q2YWJmYTAwMThiN2ViMjUiLCJpYXQiOjE2OTk3Nzc2NzcsImV4cCI6MTcwMDk4NzI3N30.9A8S4q86eIk9-WBwpQTrANyhasyPyovhuEbcmTDPhAg"; // Sostituisci con il tuo token

// Funzione per ottenere i dettagli del prodotto da modificare
async function getProductDetails(productId) {
    try {
        const response = await fetch(`${apiUrl}/${productId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Errore: ${response.status}`);
        }

        const productDetails = await response.json();
        return productDetails;
    } catch (error) {
        console.error(error);
    }
}

// Funzione per popolare il form con i dettagli del prodotto
async function populateForm() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        const productDetails = await getProductDetails(productId);

        document.getElementById("editName").value = productDetails.name;
        document.getElementById("editPrice").value = productDetails.price;
        document.getElementById("editImageUrl").value = productDetails.imageUrl;
        document.getElementById("editBrand").value = productDetails.brand;
        document.getElementById("editDescription").value = productDetails.description;

    }
}


async function updateProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        const editedProduct = {
            name: document.getElementById("editName").value,
            price: document.getElementById("editPrice").value,
            imageUrl: document.getElementById("editImageUrl").value,
            brand: document.getElementById("editBrand").value,
            description: document.getElementById("editDescription").value,
            
        };

        try {
            const response = await fetch(`${apiUrl}/${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(editedProduct),
            });

            if (!response.ok) {
                throw new Error(`Errore nell'aggiornamento del prodotto: ${response.status}`);
            }

            console.log("Prodotto aggiornato con successo!");
        } catch (error) {
            console.error(error);
        }
    }
}


populateForm();
