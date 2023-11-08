let saveButton = document.querySelector(".btn-save");
let cancelButton = document.querySelector(".btn-cancel");
const newName = document.querySelector("#text");
let lastName = document.querySelector(".lastName");

saveButton.addEventListener("click", function(){
    sessionStorage.setItem("name", newName.value);
})
cancelButton.addEventListener("click", function(){
    sessionStorage.removeItem("name");
})

if(newName){
    lastName.innerHTML = sessionStorage.getItem("pippo");
}