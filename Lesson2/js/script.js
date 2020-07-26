'uae strict'

class productList {
    constructor(container = ".products") {
        this.constructor = container;
        this.goods = [];
        this.Allproducts = [];

        this.fetchProduct();
        this.render();
    }

    fetchProduct() {
        this.goods = [{
                id: 1,
                name: "Shirt",
                price: 2000,
            },
            {
                id: 2,
                name: "Pants",
                price: 3500,
            },
            {
                id: 3,
                name: "Jacket",
                price: 5000,
            },
            {
                id: 4,
                name: "Boots",
                price: 7000,
            },
            {
                id: 5,
                name: "Gloves",
                price: 700,
            },
        ];
    }

    render() {
        const block = document.querySelector(this.constructor);
        for (let product of this.goods) {
            const productObject = new productItem(product);

            this.Allproducts.push(productObject);
            block.insertAdjacentHTML("beforeend", productObject.render());
        }
    }

    productsCalc() {
        return this.goods.reduce((sum, {
            price
        }) => sum + price, 0)
    }
};

class productItem {
    constructor(product, img = 'https://picsum.photos/200') {
        this.title = product.name;
        this.price = product.price;
        this.img = img;
    }

    render() {

        return ` <div class="product">
            <img  class="product__img" src=${this.img} alt="imf">
            <h3 class="product__title">${this.title}</h3>
            <p class="product__price">${this.price}</p>
        </div>`;
    }
}

class productCart {
    constructor(product) {
        this.product = []; // Отрисовываем продукт в таблице. маленькое фото, название количество и цена
        this.calcPrice(); // Показываем сумму товаров находящихся в корзине
    }
}

const list = new productList();
console.log(list.productsCalc());