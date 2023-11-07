let addButton = document.getElementsByClassName(".add");
let removeButton = document.getElementsByClassName(".remove");
let nameList = document.getElementsByClassName("listaNomi");

const nomi = document.getElementById("name");



addButton.addEventListener("click", function () {
    nameList.innerText = nomi.value;
    localStorage.getItem("nomi", nomi.value);
});