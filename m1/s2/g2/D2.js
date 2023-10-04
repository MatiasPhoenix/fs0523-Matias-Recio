/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


let numero1 = 2;
let numero2 = 4;

console.log('esercizio 1, tra questi due numeri qual\'è il maggiore?');
console.log(numero1, numero2);
if (numero1 > numero2) {
console.log('il maggiore è ' +numero1);
}
else (numero1 < numero2); {
  console.log('il maggiore è ' +numero2);
  }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (numero1 == 5) {
  console.log('not equal');
} else (numero1 != 5);{
  console.log('not equal')
}

if (numero2 == 5) {
  console.log('not equal');
}
else(numero2 !== 5);{
  console.log('not equal');
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let risultato1 = (numero1 % 5);
let risultato2 = (5 % numero2);

if (risultato1 === 0) {
  console.log("il primo numero è divisibili per 5");
}else if (risultato2 === 0) {
  console.log("il secondo numero è divisibili per 5");
}else (risultato1 === 0 && risultato2 === 0); {
  console.log("nessun numero è divisibili per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8 || numero2 - numero1 === 8) {
  console.log("c'è un 8");
} else (numero1 !== 8 || numero2 !== 8 || numero1 + numero2 !== 8 || numero1 - numero2 !== 8 || numero2 - numero1 !== 8); {
  console.log("non c'è un 8");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 20; //esempio
let costoSpedizione = 10;
let totale = totalShoppingCart


if (totalShoppingCart < 50) {
  totale += costoSpedizione;
 } 
 console.log("Congratulazioni! hai diritto alla spedizione gratuita! Il costo totale è di " +totale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


let totalShoppingCart2 = totalShoppingCart;
totalShoppingCart2 = totalShoppingCart2 *0.8
let totaleDaPagare = totalShoppingCart2
if (totalShoppingCart2 < 50){
  totaleDaPagare += costoSpedizione
}

console.log("Totale da pagare " +totaleDaPagare);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let n1 = 10;
let n2 = 485;
let n3 = 50;

let numeri = [n1, n2, n3];

numeri.sort(function(a,b){
  return b - a;
});
console.log(numeri);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let prova = 'prova'

if (typeof prova === 'numero') {
  console.log("è un numero")
} else {
  console.log("non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pariDispari = 32

if (pariDispari % 2 === 0) {
  console.log("numero pari")
} else {
  console.log("numero dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
 
 let val = 7
  if (val < 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
    


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me["lastName"];
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = []
array.push(1,2,3,4,5,6,7,8,9,10)
console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[9] = 100;
console.log(array)