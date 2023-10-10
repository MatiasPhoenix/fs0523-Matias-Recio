/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 4;
let num2 = 7;

if (num1 < num2){
  console.log(num2 + " è più grande");
} else if (nume1 > num2) {
  console.log(num1 + " è pià grande");
}else; {
  console.log("Sono uguali trallallero");
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 16;
if (num3 != 5){
  console.log("not equal");
}else {
  console.log("equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num4 = 21;

if (num4 % 5 === 0) {
  console.log("divisibile per 5");
} else{
  console.log("non divisibile");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let intNum1 = 4;
let intNum2 = 4;

if (intNum1 === 8 || intNum2 === 8){
  console.log("uno dei numeri è un 8");
}else if (intNum1 + intNum2 === 8 || intNum1 - intNum2 === 8) {
  console.log("la sottrazione/adizione fa 8");
}else{
  console.log("i numeri non sono 8 ed i conti non fanno 8");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let spedizione = 10;
let promozione = 50;
let checkout = totalShoppingCart;
if (totalShoppingCart < promozione){
  checkout += spedizione;
}

console.log("Costo totale: " + checkout);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = totalShoppingCart *0.8;

if (blackFriday < promozione){
  blackFriday += spedizione;
}

console.log("Costo totale: " + blackFriday);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let azz1 = 12;
let azz2 = 22;
let azz3 = 1;

if (azz1 > azz2) {}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let question = 1;

if (typeof question === 'number'){

  console.log("its a number");
}else {console.log("fuckYou");}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numberos = 87353924875348;
if (numberos % 2 === 0){
  console.log("numero pari");

}else {
  console.log("numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 654
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val <= 5) {
      console.log("Meno di 5 o uguale");
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

me.city ="Toronto"
console.log(me);

/* ESERCIZIO 12
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me);

/* ESERCIZIO 13
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arrayN = [];
arrayN.push(1,2,3,4,5,6,7,8,9,10);
console.log(arrayN);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arrayN.splice(9,1, 100)
console.log(arrayN);
