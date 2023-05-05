function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}
alert("Inizio del secondo esercizio");

let num1 = parseInt(prompt("Inserisci il primo numero per l'esercizio"));

let num2 = parseInt(prompt("Inserisci il secondo numero per l'esercizio"));

let userRes = prompt(
  "Inserisci una delle possibili 4 operazioni (+ , - , * , /)"
);

switch (userRes) {
  case "+":
    console.log("Il risultato dell'ADDIZIONE è: ");

    console.log(add(num1, num2));

    break;

  case "-":
    console.log("Il risultato della SOTTRAZIONE è: ");
    console.log(sub(num1, num2));

    break;

  case "*":
    console.log("Il risultato della MOLTIPLICAZIONE è: ");
    console.log(mul(num1, num2));

    break;

  case "/":
    console.log("Il risultato della DIVISIONE è: ");
    console.log(div(num1, num2));
    break;

    default:
    console.log("Operazione non valida");
}

//Fine secondo Esercizio

//Inizio terzo esercizio
alert("Adesso comincia il terzo esercizio");

function info(claudio) {
  return `Il colore degli occhi è: ${claudio.eyeColor} ,  età: ${claudio.age} , colore dei capelli: ${claudio.hairColor} ,  altezza: ${claudio.heightTot} , skills: ${claudio.skills} .`;
}
const description = {
  eyeColor: "Green",
  age: 23,
  hairColor: "Brown",
  heightTot: "1.77cm",
  skills: "Nessuna",
};

console.log(info(description));

//fine terzo esercizio
//
