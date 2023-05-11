// Supponiamo di avere una funzione che genera un elemento della lista con un checkbox e un pulsante
function listItemGen(item) {
    // Creiamo un elemento li
    var li = document.createElement("li");
    // Creiamo un checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    // Creiamo un pulsante
    var button = document.createElement("button");
    button.textContent = "Rimuovi";
    // Aggiungiamo il checkbox e il pulsante al li
    li.appendChild(checkbox);
    li.appendChild(button);
    // Aggiungiamo il testo dell'elemento da fare
    li.appendChild(document.createTextNode(item.todo));
    // Restituiamo il li
    return li;
  }
  
  // Supponiamo di avere una funzione che rimuove l'elemento selezionato dall'array todos e aggiorna la lista
  function removeItem() {
    // Troviamo l'indice dell'elemento da rimuovere usando il suo id
    var id = this.parentNode.id; // this si riferisce al pulsante cliccato
    var index = todos.findIndex(item => item.id == id);
    // Rimuoviamo l'elemento dall'array usando splice
    todos.splice(index, 1);
    // Aggiorniamo la lista
    listRender();
  }
  
  // Supponiamo di avere una funzione che aggiunge un nuovo elemento all'array todos e aggiorna la lista
  function addItem() {
    // Prendiamo il valore dell'input
    var inputValueText = inputEl.value;
    // Se il valore non è vuoto, creiamo un nuovo oggetto con id, todo e completed
    if (inputValueText) {
      var newItem = {
        id: Math.floor(Math.random() * 10000),
        todo: inputValueText,
        completed: false,
      };
      // Aggiungiamo l'oggetto all'array todos usando push
      todos.push(newItem);
      // Svuotiamo il valore dell'input
      inputEl.value = "";
      // Aggiorniamo la lista
      listRender();
    }
  }
  
  // Supponiamo di avere una funzione che rende la lista a partire dall'array todos
  function listRender() {
    // Svuotiamo la lista precedente
   
    // Per ogni elemento dell'array todos, creiamo un elemento della lista e lo aggiungiamo alla lista
    todos.forEach((item) => {
      var li = listItemGen(item);
      li.id = item.id; // Assegnamo l'id dell'elemento al li per poterlo identificare
      listEl.append(li);
      // Aggiungiamo un evento al pulsante per rimuovere l'elemento quando viene cliccato
      li.querySelector("button").addEventListener("click", removeItem);
    });
  }
  
  // Supponiamo di avere una variabile che contiene l'elemento ul della lista
  var listEl = document.getElementById("todo-list");
  
  // Supponiamo di avere una variabile che contiene l'elemento input per inserire il testo
  var inputEl = document.getElementById("todo-input");
  
  // Supponiamo di avere una variabile che contiene l'elemento button per aggiungere un nuovo elemento
  var todoButtonEL = document.getElementById("todo-button");
  
  // Supponiamo di avere una variabile che contiene l'array di elementi da fare
  var todos = [];
  
  // Rendiamo la lista iniziale (vuota)
  listRender();
  
  // Aggiungiamo un evento al pulsante per aggiungere un nuovo elemento quando viene cliccato
  todoButtonEL.addEventListener("click", addItem);
  