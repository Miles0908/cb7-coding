import { GET, POST, DELETE } from "/utils/http.js";
import { createEl,productGen, createLogIn } from "./utils/fn.js";
import { usersList } from "./utils/credentials.js";

/* fetch ("indirizzo", {

    method:"POST",
    headers: {
        "content-Type":"application/json"
    },
    body:{
        username: "PIPPO"
    }

})
.then()
.then()

//Traduce in stringa un oggetto
JSON.stringify({
    username:"Pippo",
    password:"pluto"
})

 */ //Questo di prima l'ho scritto io casi ha cominciato in http.js
//Questo dopo l'ho scritto a lezione
/* GET("/2").then((data) => console.log(data));

POST("/add", {
  title: "qualcosa di bello",
});

DELETE("/1");
 */
const rootEl = document.querySelector("#root");

const bodyEl = document.querySelector("body");
const wrapperEl = createEl("div", "" ,{name:"class", value:"cartList"});

const userId =""

/* bodyEl.append(wrapperEl); */
   
  /*   GET(`/carts/${userId}`).then((data) =>
    data.products.forEach((product) => wrapperEl.append(productGen(product)))
    ); */

    rootEl.append(createLogIn());
    