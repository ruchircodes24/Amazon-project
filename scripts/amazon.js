const products = [{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        star: 4.5,
        count: 87
    },
    priceCents: 1090 //saving the price in cents(1 dollar = 100 cents)
}, {
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        star: 4,
        count: 127
    },
    priceCents: 2095
}, {
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        star: 4.5,
        count: 56
    },
    priceCents: 799    
}];

//combining all the html
let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.star * 10}.png"> ${/*this is a comment- here we multiplied it by 10 because images are saved by the name rating-45 but our saved html is rating.stars: 4.5 */''}
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)} ${/** divided by 100 because we've saved the original value in cents 
            
            toFixed(2) will convert a no. into a string and using this we can show a no with 2 decimal places  */''}
        </div>

        <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary">
        Add to Cart
        </button>
    </div>`; 
});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;