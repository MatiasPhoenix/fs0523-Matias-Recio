
    const tombola = document.getElementById("tombola");

    for (let i = 1; i <= 76; i++) {
        let numero = i;
        
        let spazioG = document.createElement("div");
        spazioG.classList.add("numero");
        spazioG.innerText = numero;
    
        tombola.appendChild(spazioG);
    }
    
    let currentNumber = document.querySelector("#current-number");
    let sButton = document.querySelector("#start-button");
    
    sButton.addEventListener("click", function() {
        while (currentNumber.firstChild) {
            currentNumber.removeChild(currentNumber.firstChild);
        }
        
        newNumber = Math.floor(Math.random() * 76) + 1;
        currentNumber.append(newNumber);
    
        let numeriUsciti = document.querySelectorAll(".numero");
    
        for (let numero of numeriUsciti) {
            if (parseInt(numero.innerText) === newNumber) {
                numero.style.backgroundColor = "red";
            }
        }
    });
    