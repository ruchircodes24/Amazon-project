
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
            src="images/ratings/rating-${product.rating.stars* 10}.png"> ${/*this is a comment- here we multiplied it by 10 because images are saved by the name rating-45 but our saved html is rating.stars: 4.5 */''}
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)} ${/** divided by 100 because we've saved the original value in cents 
            
            toFixed(2) will convert a no. into a string and using this we can show a no with 2 decimal places  */''}
        </div>

        <div class="product-quantity-container">
        <select class = 'js-quantity-selector-${product.id}'>
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

        <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        ${/**data-product-name = "${product.name
            we'll not use product name to identify the products in the cart instead we'll use product id for it because id is unique but the name is not*/''}
            data-product-id = "${product.id}"> ${/**using data attribute we can specify the product that needs to be added to the cart*/''}
        Add to Cart
        </button>
    </div>`; 
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

let setTimeoutId;
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const {productId} = button.dataset; 
        //Destructuring- when the property name is same as the variable, we can write it in the above manner instead of- const productID = button.dataset.productId
        
        //to get the product id from the button we are using .dataset
        
        //button.dataset acts just like an object therefore to access the id of the product we write .productId

        let quantitySelectorElem = Number(document.querySelector(`.js-quantity-selector-${productId}`). value);

        let matchingItem;
        //check if the product is alredy in the cart and if it is there, increase the quantity by 1
        cart.forEach((item) => {
            if(productId === item.productId){
                matchingItem = item;
            }
        });
            matchingItem ? matchingItem.quantity += quantitySelectorElem : cart.push({productId, quantity: 1
        })

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

        let addedToCart = document.querySelector(`.js-added-to-cart-${productId}`)

        addedToCart.classList.add('is-added');
        
        if(setTimeoutId){
            clearTimeout(setTimeoutId);
        }

        setTimeoutId = setTimeout(() => {
            addedToCart.classList.remove('is-added');
        }, 2000);
    })      
})    
