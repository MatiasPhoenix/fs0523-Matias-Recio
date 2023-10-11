

const bottone = document.getElementById("button");

bottone.addEventListener("click", function(){
    let risultato = document.getElementById("risultato");
    let input = document.getElementById("lista");

    if (!input.value) return;

    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerText = input.value;

    
    let icon = document.createElement("i");
    icon.classList.add("fas", "fa-times-circle");
        icon.addEventListener("click", function(){
            risultato.removeChild(li);
        });

        li.addEventListener("click", function(){
        li.classList.add("del");
        fatti.append(li);
        
        })

    
    li.appendChild(icon);

    
    risultato.appendChild(li);

    
    input.value = '';
});
