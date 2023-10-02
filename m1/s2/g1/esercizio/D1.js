/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* Principali datatype JavaScript
Stringa: utilizzato per definire elementi alfanumerici che si trovino tra virgolette
es: "ciao a tutti"
es di scrittura: */
  let testo = "ciao a tutti";
  console.log (testo); //prova su console
/*Numerico: utilizzato per definire elementi numerici, interi e decimali (il decimale si esrpime con il punto)
es: 1, 5, 98.2, 157.85
es di scrittura: */
let numero1 = 1;
let numero2 = 658;
let numero3 = 127.55;
console.log (numero1,"/", numero2, "/", numero3); //prova su console, il simbolo "/" aggiunto per separare visivamente i numeri 
/*Booleano: utilizzato per dichiarere vero(true) o falso(false) a scopo di controllo o presa di decisioni
es: 1 è un numero? il Booleano dirà di sì(true), nel caso sia stato programmato così
es di scrittura: */
let acceso = false; //in questo caso stiamo dicendo che di default il nostro ipotetico elemento è spento, giacché il booleano è false sullo stato di acceso



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const NOME = "Matias";
console.log (NOME); //qui chiediamo a console di mostrare il datatype nome

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numeroAlfa = 12;
let numeroBeta = 20;
console.log (numeroAlfa + numeroBeta); //qui chiediamo a console di mostrare la somma tra gli elementi numeroAlfa e numeroBeta, definiti precedentemente come numeri

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log (x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//NOME = "Recio";
/*in questo esempio, nome non può essere cambiato perché nella stringa 39 è stato creato con un const, ciò vuol dire che è "constante", ovvero, non modificabile.
Ciononostate, se fosse stato creato un const con dati all'interno, ad esempio nome e cognome, ci sarebbe stata la possibilità di modificare i singoli elementi
*/
const MIO_NOME = {
 nome : "Matias",
 cognome : "Recio"
}

//qui modifichiamo il nome dentro MIO_NOME, basterà far diventare un commento questo elemento per farsì che la console mostri nome e cognomi originali
MIO_NOME.nome = "Recio";

console.log (MIO_NOME);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log (x - 4); 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";


