const divTest = document.querySelector(".test");
console.log(divTest);

// divTest.textContent = "Hello World";

const paragrafo = document.createElement("p");
paragrafo.className = "testo";

paragrafo.textContent = "Hello World";

divTest.appendChild(paragrafo);

// divTest.innerHTML = "<p>Hello World</p>";

// aggiunge classe
//  divTest.classList.add("active");

// rimuovi classe
// divTest.classList.remove("test");

// EVENTI
function clickBtn() {
  // aggiunge/rimuove classe
  divTest.classList.toggle("active");
}

const button = document.querySelector(".btn");

button.addEventListener("click", clickBtn);

// button.addEventListener("click", event => {
//   console.log("Evento: ", event);
//   console.log("Testo: ", event.target.textContent);
// });

button.addEventListener("click", () => {
  console.log("Hai cliccato");
});
