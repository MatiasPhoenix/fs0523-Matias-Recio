

    const bottone = document.getElementById("bottone")

    bottone.addEventListener("click", function(){
        let input = document.getElementById("testo");
        let lista = document.getElementById("lista");

        let li = document.createElement("li");
        li.classList.add("item-li");
        li.innerText = input.value;

        lista.appendChild(li);

        input.value = "";
    })

    bottone.addEventListener("keypress", function(e){

        if(e.key === "enter"){

            
            let input = document.getElementById("testo");
            let lista = document.getElementById("lista");
            
            let li = document.createElement("li");
            li.classList.add("item-li");
            li.innerText = input.value;
            
            lista.appendChild(li);
            
            input.value = "";
        }
    })
