if (event.target.classList.contains("product__quantity-control_inc")) {
    const product = event.target.closest(".product");
    const quantity = product.querySelector(".product__quantity-value");
    quantity.textContent = parseInt(quantity.textContent) + 1;
}

if (event.target.classList.contains("product__quantity-control_dec")) {
    const product = event.target.closest(".product");
    const quantity = product.querySelector(".product__quantity-value");
    let currentValue = parseInt(quantity.textContent);
    if (currentValue > 1) {
        quantity.textContent = currentValue - 1;
    }
}

if (event.target.classList.contains("product__add")) {
    const product = event.target.closest(".product");
    const productId = product.dataset.id;
    const productImage = product.querySelector(".product__image").src;
    const productQuantity = parseInt(product.querySelector(".product__quantity-value").textContent);
    const cart = document.querySelector(".cart__products");
    let cartProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);

    if (cartProduct) {
        const cartCount = cartProduct.querySelector(".cart__product-count");
        cartCount.textContent = parseInt(cartCount.textContent) + productQuantity;
    } else {
        const newCartProduct = document.createElement("div");
        newCartProduct.classList.add("cart__product");
        newCartProduct.dataset.id = productId;

        const img = document.createElement("img");
        img.classList.add("cart__product-image");
        img.src = productImage;

        const count = document.createElement("div");
        count.classList.add("cart__product-count");
        count.textContent = productQuantity;

        newCartProduct.append(img);
        newCartProduct.append(count);
        cart.append(newCartProduct);
    }
}