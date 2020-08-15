"use strict"
const products = [{
        id: 1,
        title: "Mouse",
        price: 200,
    },
    {
        id: 2,
        title: "Mobile",
        price: 1500,
    },
    {
        id: 3,
        title: "Keyboard",
        price: 700,
    },
    {
        id: 4,
        title: "Laptop",
        price: 3000,
    },
    {
        id: 5,
        title: "Tablet",
        price: 2000,
    },
];
let block = document.querySelector('.products')

const renderPrice = (title = "product", price = "290", img = "https://picsum.photos/200") => {
    return block.insertAdjacentHTML("beforeend", `<div class="product__item">
    <h2 class="product__title">${title}</h2>
    <img class="picture" alt="picture" src="${img}">
    <p class="product__price">${price}</p>
    <button class="by-btn">Добавить в корзину</button>
</div>`)
};

const renderProducts = list => {
    products.forEach(element => renderPrice(element.title, element.price));
}

renderProducts(products);

document.querySelector('header').classList.add("header")
document.querySelector(".products").classList.add("flex");
document.querySelectorAll(".product__item").forEach(item => item.classList.add("border"));