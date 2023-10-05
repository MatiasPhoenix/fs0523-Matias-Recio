/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
 /*function area (l1, l2){
    
 }*/


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (a,b){
    let risultato = 0;
    if (a != b){
        risultato = a + b;
        return risultato
    }else (a === b);{
        risultato = (a + b)*3
    }
    return risultato
}
crazySum()

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (a){
    let risultato = 0;    
    let b = 19;
    if (a <= b) {
        risultato = a + b
        Math.abs(risultato)
        return (risultato);
    }else (a > b); {
        risultato = a + b
        risultato *= 3
        Math.abs(risultato)
        return (risultato);
    }   
}
crazyDiff()

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if ((n > 20 && n < 100 ) || (n === 400)) {
        return console.log("Numero accettato");
    } else if (n != 0) {
        return ("Inserire numero diverso da zero");
    } else; {
        return ("Numero non accettato");
    }
}
boundary()

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*
function epify (f){
    

    if (f.startsWith("EPICODE") == true){
        return console.log(f);
    } else; {
        let scritta = f;
        f.replace(scritta, "EPICODE)
    }
        return console.log(f);
    

    
} epify("EPICODE");*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
 /*
function check3and7 (n){
    let rest3 = (n % 3);
    if (rest3 > 0) {
        
        return console.log(rest3);
    }
       
}
check3and7(5)
*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
let string = "EPICODE"
//function reverseString (){
    let parolaReverse = [];
    let lista = string.split("")
    parolaReverse.push(lista)
    let reversedEpi = parolaReverse.reverse();
console.log(reversedEpi);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
