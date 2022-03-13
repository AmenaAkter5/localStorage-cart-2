

// btn - 1

// 1. add To Cart

const addToCart = () => {
    const productBox = document.getElementById('product-input');
    const productName = productBox.value;
    const priceBox = document.getElementById('price-input');
    const price = parseInt(priceBox.value);

    // add to local Storage
    addProductToCart(productName, price);

    // clear input field
    productBox.value = '';
    priceBox.value = '';
}


// 2. get Cart [check the cart existence]

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}


// 3. add product to cart [localStorage]

const addProductToCart = (productName, price) => {
    const cart = getCart();
    if (cart[productName]) {
        cart[productName] += price;
    }
    else {
        cart[productName] = price;
    }

    // display product list in UI
    displayProducts(cart);

    // stringify the cart to add in local storage
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', `${cartStringified}`);
}


// 4. display product list in UI

const displayProducts = (product) => {
    const productList = document.getElementById('products');
    productList.textContent = '';

    // add cart objects in list
    for (const name in product) {
        const li = document.createElement('li');
        li.className = 'list';
        li.innerText = `${name} : ${product[name]}`;
        productList.appendChild(li);
    }
}


// 5. display local Storage cart in UI

const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        // console.log(name, cart[name]);

        // display to UI
        const productList = document.getElementById('products');
        const li = document.createElement('li');
        li.className = 'list';
        li.innerText = `${name}: ${cart[name]}`;
        productList.appendChild(li);
    }
}


// function call
displayLocalStorageCart();


// btn - 2 : Place Order Button

const placeOrder = () => {
    // remove from UI
    const productList = document.getElementById('products');
    productList.textContent = '';

    // remove from local storage
    localStorage.removeItem('cart');
}



