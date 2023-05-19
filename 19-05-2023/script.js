import {
  cE,
  qS,
  qSA,
  createProduct,
  createProductModal,
  createCartModal,
  createLogIn,
} from "./utils/fn.js";



export const rootEl = qS("#root");
export const productList = cE("div");
export const productListTitle = cE("h2");
export const searchProductEl = qS(".searchInput");
export const cartEl = qS(".cart");
export const navbarEl = qS(".navbar");
export const heroEl = qS(".hero");
export const categories= qS(".categories");

export let productListData = [];
export let cartItems = [];


 const callModal = () => {
  {
    const productCardEls = qSA(".product__card");
    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(newProductModal(data, rootEl)))
      )
    );
  }
};

/* let searchProductValue = ""; */

productList.className = "productList";
productListTitle.textContent = "Products for you!";

/* rootEl.append(productListTitle, productList); */
navbarEl.style.display = "none";
heroEl.style.display = "none";
rootEl.append(createLogIn());

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

categories.addEventListener("change", (evt) => {
  if (evt.target.value === "filter") {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        productListData = data.products;
        productListData.forEach((product) =>
          productList.append(createProduct(product))
        );
      })
      .then(() => callModal());
  } else {
    fetch(`https://dummyjson.com/products/category/${evt.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        productList.textContent = "";
        data.products.forEach((obj) => productList.append(createProduct(obj)));
      })
      .then(() => callModal());
  }
});

cartEl.addEventListener("click", () => {
  rootEl.append(createCartModal(cartItems, rootEl));
  const cartModal = qS(".cartModal");

  cartEl.disabled = true;
  cartModal.classList.add("cartModal__active");
});


