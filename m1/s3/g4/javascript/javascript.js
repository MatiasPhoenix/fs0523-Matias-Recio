const tombola = document.getElementById("tombola");

for (let i = 1; i < 77; i++){
    let numero = i;
    
    
    let spazioG = document.createElement("div");
    spazioG.classList.add("numero");
    spazioG.innerText = numero;


    tombola.append(spazioG);
    
}

let currentNumber = document.querySelector("#current-number");
let sButton = document.querySelector("#start-button");

sButton.addEventListener("click", function(){
    
    while (currentNumber.firstChild) {
        currentNumber.removeChild(currentNumber.firstChild);
    }
        newNumber = Math.floor(Math.random() * 77);
        currentNumber.append(newNumber); 


        let numeriUsciti = document.querySelector(".numeri");

        for (let numeri of numeriUsciti){
            if (numeri === newNumber){
                numeriUsciti.classList.add("numeroUsciti");
            }


        }


    })  

