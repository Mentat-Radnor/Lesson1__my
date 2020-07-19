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

const renderPrice = (title = "product", price = "290", img = "https://picsum.photos/200") => {
    return `<div class="product__item">
        <h2 class="product__title">${title}</h2>
        <img alt="picture" src="${img}">
        <p class="product__price">${price}</p>
        <button class="by-btn">Добавить в корзину</button>
    </div>`;
};

const renderProducts = list => {
    const productList = list.map(item => renderPrice(item.title, item.price));
    document.querySelector('.products').innerHTML = productList.join("");
}

renderProducts(products);

document.querySelector('header').classList.add("header")
document.querySelector(".products").classList.add("flex");
document.querySelectorAll(".product__item").forEach(item => item.classList.add("border"));

// Заяпятая вывводится из-за масива данных. join("") - уберет запятую
// Читать