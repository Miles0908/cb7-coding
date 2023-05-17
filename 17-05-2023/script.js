import { cE, qS, createProduct, createProductModal, qSA } from "./utils/fn.js";

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".searchInput");
const productCategory = qSA(".filter__list");

let productListData = [];

/* let searchProductValue = ""; */

productList.className = "productList";
productListTitle.textContent = "Products for you!";

rootEl.append(productListTitle, productList);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) =>
      productList.append(createProduct(product))
    );
  })
  .then(() => {
    const productCardEls = qSA(".productCard");

    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(createProductModal(data, rootEl)))
      )
    );
  });

searchProductEl.addEventListener("input", (evt) => {
  /*  if (evt.target.value.lenght >= 3) { */
  /*     rootEl.removeChild(productList); */
  /*  searchProductValue = evt.target.value; */
  productList.textContent = "";

  productListData
    .filter((product) =>
      product.description.toLowerCase().includes(evt.target.value.toLowerCase())
    )

    .forEach((obj) => productList.append(createProduct(obj)));
});
/* 
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (evt) => {
    // Ottieni la categoria selezionata dal valore della checkbox
    let selectedCategory = evt.target.value;

    // Svuota la lista dei prodotti
    productList.textContent = "";

    // Filtra l'array dei prodotti per la categoria selezionata
    let filteredProducts = productListData.filter(
      (product) => product.category === selectedCategory
    );

    // Crea e aggiungi un elemento per ogni prodotto filtrato
    filteredProducts.forEach((product) =>
      productList.append(createProduct(product))
    );
  });
});
 */
function filterCategories() {
  fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    const categories = data.filter(item => item.category === 'categoria');
    console.log(categories);
  });
}

document.querySelector('.filter__list').addEventListener('click', filterCategories);