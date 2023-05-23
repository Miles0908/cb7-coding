import { DELETE } from "./http.js";
import { GET } from "./http.js";
import { usersList } from "./credentials.js";

export const createEl=(type , content , ...attrs)=>{
    const el= document.createElement(type);

    el.textContent=content;
    attrs.forEach((attr)=> el.setAttribute(attr?.name , attr?.value));
    return el;
};

export const productGen = (productData)=>{
    const wrapperEl= createEl("div","",{name:"class",value:"cartItem"});
    const titleEl = createEl("h4",productData.title ,{
        name:"src",
        value: productData.title,
    });
    const priceEl = createEl("p","Price : " + productData.price,{
        name:"class",
        value:"cartItem__title",
    });
    const quantityEl = createEl("p","Quantity : "+productData.quantity,{
        name:"class",
        value:"cartItem__quantity",
    });
    /* wrapperEl.style.display="none"; */
    wrapperEl.append(titleEl,priceEl,quantityEl);
    wrapperEl.addEventListener("click", ()=>{
        const isConfirmed=confirm("sto per cancellare il prodotto, confermi?");
        if(isConfirmed)DELETE(`/carts/${productData.id}`);
    });
    return wrapperEl;
};


export const createLogIn = (userId) => {
    const wrapperEl = document.createElement("form");
    const usernameInputEl = document.createElement("input");
    const passwordInputEl = document.createElement("input");
    const submitBtnEl = document.createElement("input");
  
    wrapperEl.className = "login";
    usernameInputEl.type = "text";
    usernameInputEl.placeholder = "Username..";
  
    passwordInputEl.type = "password";
    passwordInputEl.placeholder = "Password...";
  
    submitBtnEl.type = "submit";
    

  
    wrapperEl.addEventListener("submit", (e) => {
        
      e.preventDefault();
  
      const isAuth = !!usersList.find(
        (user) =>
          user.username === event.srcElement[0].value &&
          user.password === event.srcElement[1].value
      );
      
     if (isAuth){
        const logInUser = usersList.find(
            (user) =>
              user.username === event.srcElement[0].value &&
              user.password === event.srcElement[1].value

              );
              
              const logInUserName = event.srcElement[0].value;
              const logInUserNameEl = createEl("p", "Sei entrato come: " + logInUserName);
              wrapperEl.append(logInUserNameEl);

              GET(`/carts/${logInUser.id}`).then((data) =>
              data.products.forEach((product) => wrapperEl.append(productGen(product)))
            );
          }
                    
          
     
    });
    
    wrapperEl.append(usernameInputEl, passwordInputEl, submitBtnEl);
  
    return wrapperEl;

};

