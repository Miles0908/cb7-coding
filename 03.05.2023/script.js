//let userName = prompt("come 'ti' chiami");

//let userAge = parseInt(prompt("quanti anni hai?"));

//console.log("ciao", userName, "quindi hai", userAge, "anni");

//if (userAge >= 18 && (userAge <= 50)) {
// alert("Benvenuto nel sito");
//} else if (userAge === 17) {
// alert("Ti facciamo entrare in via straordinaria tra poco sarai maggiorenne");
//} else {
//alert("Non puoi entrare hai " + userAge + " ,l'eta non è consentita");

//console.log(
// "non puoi entrare , hai",
//parseInt(userAge),
//"anni" );
//}

//
/* let weekDay = prompt("Inserisci un giorno della settimana").toLowerCase();
 *//* switch (weekDay) {
  case "lunedi":
    console.log("Inizio settimana, brutta storia");
    break;
  case "martedì":
    console.log("Il peggio è passato , mancano 4 giorni");
    break;
  case "venerdì":
    console.log("Forza che siamo a venerdì");
    break;

    default:
        console.log(weekDay + " Non è presente all'interno ello switch");
}
  */
/* weekDay === "lunedi" ? console.log("è lunedi") : console.log("Non è lunedi"); */

//Sintassi {condizione} ? istruzioneVera : istruzioneFalsa
 //Primo Esercizio
let userNum = parseInt(prompt("Inserisci un numero per il primo esercizio"));

if (userNum % 2 == 0 ) {
  
  console.log("Il numero è pari");

} else {

  console.log("Il numero è dispari");
}

//Fine primo esercizio
//Secondo Esercizio
alert("Ecco ora che è finito il primo esercizio si avvierà il secondo");
let userNum2 = parseInt(prompt("Inserisci un numero per il secondo esercizio"));

userNum2 % 2 == 0 ? console.log("Il numero è pari") : console.log("Il numero è dispari");
//Fine secondo Esercizio
//Inizio esercizio avanzato
alert("Ecco ora che è finito il primo esercizio si avvierà il terzo");

let userNum3 = parseInt(prompt("Inserisci il primo numero per il terzo esercizio"));

let userNum4 = parseInt(prompt("Inserisci il secondo numero per il terzo esercizio"));

let userRes = prompt("Inserisci una delle possibili 4 operazioni (+ , - , * , /)");

let result;

switch (userRes) {

  case "+" :

    result = userNum3 + userNum4;

    console.log("Il risultato dell'operazione è " , result);

    break;

     case "-" :

    result = userNum3 - userNum4;

    console.log("Il risultato dell'operazione è " , result);

    break;

    case "*" :

     result = userNum3 * userNum4;

    console.log("Il risultato dell'operazione è " , result);

    break;

    case "/" :

     result = userNum3 / userNum4;

    console.log("Il risultato dell'operazione è " , result);

    break; 
}


