const exBtn = document.querySelector(".ex1");

exBtn.addEventListener("click", () => {
  console.log(
    "è stato cliccato il bottone quindi diventerà un messaggio di saluto"
  );

  exBtn.innerHTML = "Ciaoo mi hai cliccato e adesso sono un messaggio di testo";
});

const inputField = document.getElementById("inputField");

const submitBtn = document.getElementById("submitBtn");

const output = document.getElementById("output");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); 
  output.textContent = inputField.value;

});
