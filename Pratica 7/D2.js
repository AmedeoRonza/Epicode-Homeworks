/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var num1 = 10;
var num2 = 1;
if (num1 > num2) {
  console.log("num1 è maggiore di num2");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var num1 = 10;
if (num1 != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var num1 = 10;
if (num1%5 == 0) {
  num1 + " è divisibile per 5"
  console.log("divisibile per 5");
} 

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var num1 = 8;
var num2 = 0;
if (num1 + num2 == 8) {console.log("fa 8");}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 50
if (totalShoppingCart >= 50) {
  totalShoppingCart + 0;
  console.log("In promozione");
} else if (totalShoppingCart < 50) {totalShoppingCart + 10;
console.log("nessuna promozione");}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totalShoppingCart = 50
if (totalShoppingCart >= 50) {
  totalShoppingCart + 0;
  totalShoppingCart * 0.2;
  console.log("In promozione e scontato del 20% per black friday");
} else if (totalShoppingCart < 50) {
           totalShoppingCart + 10;
           totalShoppingCart * 0.2;
           console.log("nessuna promozione ma scontato del 20% per black friday");
    }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var num1 = "ciao";
 if (isNaN(num1)){
	console.log(num1 + " non è un numero");
 }else{
	console.log(num1 + " è un numero");
 }


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var num1 = 2;
if (num1%2 == 0) {console.log(num1 + " è pari");}
else {console.log(num1 + " è dispari");}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    } 
    */


let val = 4
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 4 o minore");
    }

 /* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']}
  me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']}
  me.city = "Toronto";
  delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']}
  me.city = "Toronto";
  skills.pop;

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var numeriDaUnoADieci = [
       1,
       2,
       3,
       4,
       5,
       6,
       7,
       8,
       9,
       10
]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
