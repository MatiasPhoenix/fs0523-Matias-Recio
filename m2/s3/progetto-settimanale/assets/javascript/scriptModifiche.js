const apiUrl = "https://striveschool-api.herokuapp.com/api/product";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUwOGM4Y2Q2YWJmYTAwMThiN2ViMjUiLCJpYXQiOjE2OTk3Nzc2NzcsImV4cCI6MTcwMDk4NzI3N30.9A8S4q86eIk9-WBwpQTrANyhasyPyovhuEbcmTDPhAg"; 

const url = new URLSearchParams(location.search);
const prodottoId = apiUrl.get("_id");

fetch(apiUrl + prodottoId)
 .then((response) => response.json())
 .then(prodotto => {

    let name = document.querySelector("#editName");
    let price = document.querySelector("#editPrice");
    let imageUrl = document.querySelector("#editImageUrl");
    let brand = document.querySelector("#editBrand");
    let description = document.querySelector("#editDescription");
    
    name.value = prodotto.name;
    price.value = prodotto.price;
    imageUrl.value = prodotto.imageUrl;
    brand.value = prodotto.brand;
    description.value = prodotto.description;

 })