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

/* I principali datatypes di Javascript sono: stringhe, numeri, dati booleani, null e undefined. le stringhe son fatte
di parole senza numeri, i numeri solo di numeri e senza parole. i Dati booleani possono essere solo veri o falsi. Null è
un dato che si lascia lì per poi modificarlo in futuro. Undefined è un dato che non esiste.  */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const Name = 'Amedeo';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
let b = 20;
let c = a + b;
console.log(c);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var sName = 'Ronza';
console.log(Name);
/* sulla console appare il seguente messaggio d'errore 

"Uncaught SyntaxError: Identifier 'Name' has already been declared (at D1.js:44:5)" 

ma ora modifico il nome della variabile per poter andare avanti con l'esercizio, aggiungendo la lettera "s" prima di "Name" */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let g = 12; // x è g, altrimenti non mi faceva andare avanti, mi dava sempre errore sulla console
let y = 4;
let z = y - g;
console.log(z);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let Name1 = 'john';
let k = Name1.toLowerCase();
let Name2 = 'John';
let q = Name2.toLowerCase();
console.log(('john = John'));

// Scusate le lettere a caso ma se c'è una minima ripetizione di queste ultime, la console da errore e non va avanti





