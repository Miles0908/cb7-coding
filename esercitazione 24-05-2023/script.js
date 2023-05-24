/* ESERCIZIO 1
Supponiamo di avere un array con le seguenti informazioni: nome, cognome e paese di origine di una persona.

let persona = ["Mario", "Rossi", "Italia"];

Usando il destructuring, crea tre variabili separate (nome, cognome e paese) a partire dall'array "persona".

Svolgimento: per destrutturare un'array è controintuitivo dato che il nome della variabile sarà scritto successivamente alla dichiarazione delle variabile 
cioè

let [nome,cognome,paese] = persona;

Quindi facendo in questo modo la variabile nome avrà il valore Mario , e così via */

let persona = ["Mario", "Rossi", "Italia"];

let [nome, cognome, paese] = persona;
console.log(persona);
/* 
ESERCIZIO 2
    La stessa cosa per quanto riguarda gli oggetti, a sua volta controintuitivo dato che nella costruzione di un oggetto canonico
    solitamente la struttura è così :

  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980

  invece con il destructuring si dichiara sempre l'oggetto 
  
  let {titolo, autore , anno}=libro
 */

const libro = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
};

let { titolo, autore, anno } = libro;
console.log(libro);

//ESERCIZIO AVANZATO 1

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value    

let guest = ["Piero" , "Bianchi" ,undefined , null];

let [name, surname, state , age]= guest;

console.log(guest)

let book ={
    title:"1984",
    author:"George Orwell",
    year: 1949,
    nCopies:undefined
    
};

let { title, author, year ,nCopies}=book;
console.log(book )



