let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let listProduct = [];
let cart = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

const addDataHTML = () => {
    listProductHTML.innerHTML = "";
    if (listProduct.length > 0) {
        listProduct.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" alt="Image Loading..." />
                <h2>${product.name}</h2>
                <div class="price">${"$" + product.price}</div>
                <button class="addCart">Add to Cart</button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        // let product_id = positionClick.parentElement.dataset.id;
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
        // alert("successfully Done")
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if (cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        })
    } else {
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    // console.log(cart);
    addCartToHTML();
    addCartToMemory();

}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = "";
    let totalQuantity = 0;
    if (cart.length > 0) {

        cart.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listProduct.findIndex((value) => value.id == cart.product_id);
            let info = listProduct[positionProduct];
            newCart.innerHTML = `
            
                <div class="image">
                <img
                src="${info.image}"
                height="50px"
                width="70px"
                alt="Loading image..."
                />
                </div>
                <p class="name">${info.name}</p>
                <div class="totalPrice">${info.price * cart.quantity}</div>
                <div class="quantity">
                <span class="minus"><</span>
                <span class="quantity-value">${cart.quantity}</span>
                <span class="plus">></span>
                </div>

            `;
            listCartHTML.appendChild(newCart);
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', () => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})
const changeQuantity = (product_id, type) => {
    let positionItemCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionItemCart >= 0) {
        switch (type) {
            case 'plus': cart[positionItemCart].quantity = cart[positionItemCart].quantity + 1;
                break;

            default:
                let valueChange = cart[positionItemCart].quantity - 1;
                if (valueChange > 0) {
                    cart[positionItemCart].quantity = valueChange;
                } else {
                    cart.splice(positionItemCart, 1);
                }
                break;
        }

    }
    addCartToMemory();
    addCartToHTML();
}

const initApp = () => {

    fetch('Product.json').then(response => response.json()).then(data => {
        listProduct = data;
        // console.log(listProduct);
        addDataHTML();

        if (localStorage.getItem(cart)) {
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();
