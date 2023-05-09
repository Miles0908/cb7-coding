const hamburgerBtn = document.querySelector(".hamburger");
const tendinaDiv = document.querySelector(".tendina");

// const test = document.getElementById("test")

function hamburgerFunc() {
  console.log("Hai cliccato");
  tendinaDiv.classList.toggle("show");
}

// click: viene attivato quando un elemento viene cliccato
hamburgerBtn.addEventListener("click", hamburgerFunc);

hamburgerBtn.addEventListener("click", () => {
  console.log("click");
});

const arrowFunc = () => {
  console.log("click");
};

// submit: viene attivato quando viene inviato un form
const form = document.querySelector("#form");

form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("hai submittato!!:", event.target[0].value);
});

// keydown: viene attivato quando una tastiera viene premuta
// keyup: viene attivato quando una tastiera viene rilasciata
window.addEventListener("keydown", e => {
  //   console.log("hai premuto la tastiera: ", e.key);
  if (e.key === "a") {
    console.log("hai premuto la lettera A");
  }
});

// mouseenter: viene attivato quando il cursore del mouse entra nell'area di un elemento
// mouseleave: viene attivato quando il cursore del mouse esce dall'area di un elemento
const boxDiv = document.querySelector(".box");
boxDiv.addEventListener("mouseenter", () => {
  console.log("moouseEnter");
});

// scroll: viene attivato quando la finestra del browser viene scorrere o scorrere un elemento
const header = document.querySelector("header");
window.addEventListener("scroll", e => {
  console.log(e);
  header.classList.add("scrolled");
});

// load: viene attivato quando la pagina web viene caricata
// unload: viene attivato quando la pagina web viene scaricata
// resize: viene attivato quando la finestra del browser viene ridimensionata
