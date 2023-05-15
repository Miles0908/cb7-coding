import { cE, qS, createProduct } from "./utils/fn.js";


const productMock = {
  id: 1,
  title: "nike",
  description: "A very confortable shoes",
  price: 200,
  rating: 4.69,
  thumbnail:
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/55545074-5cd5-4ee6-bd6c-6f7abba0f474/scarpa-air-max-plus-og-xV03SK.png",
};
const productMock1 = {
  id: 2,
  title: "Adidas",
  description: "One of the best seller of this collection",
  price: 180,
  rating: 4.2,
  thumbnail: "https://kickwho.it/wp-content/uploads/2021/09/f6011179.png",
};
const rootEl = qS("#root");

const productList = cE("div");

const productListTitle = cE("h2");

productList.className = "productList";
productListTitle.textContent = "Products for you!";

productList.append(createProduct(productMock));
productList.append(createProduct(productMock1));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) =>
      productList.append(createProduct(product))
    )
  );

rootEl.append(productListTitle, productList);


