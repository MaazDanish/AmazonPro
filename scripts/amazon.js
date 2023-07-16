console.log("Amazon Home Page");
/* We dont neet add manualy we can make separate js file for storing all data in whichb we created an array to store the data
const products = [
    {
        image : "images/products/athletic-cotton-socks-6-pairs.jpg",
        name :  'Black and Gray Athletic Cotton Socks - 6 Pairs',
        rating : {
            stars : 4.5,
            count : 87
        },
        // we arev adding price in cents not in dollar ---> 1 dollar = 100 cents
        priceInCents : 1090
    },
    {
        image : "images/products/intermediate-composite-basketball.jpg",
        name :  'Intermediate Size Basketball',
        rating : {
            stars : 4,
            count : 127
        },
        // we arev adding price in cents not in dollar ---> 1 dollar = 100 cents
        priceInCents : 2095
    },
    {
        image : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name :  'Adults Plain Cotton T-Shirt - 2 Pack',
        rating : {
            stars : 4.5,
            count : 56
        },
        // we arev adding price in cents not in dollar ---> 1 dollar = 100 cents
        priceInCents : 799
    },
    {
        image : "images/products/black-2-slot-toaster.jpg",
        name :  '2 Slot Toaster - Black',
        rating : {
            stars : 5,
            count : 2197
        },
        // we arev adding price in cents not in dollar ---> 1 dollar = 100 cents
        priceInCents : 1899
    }
];
*/

// -------------------->>>>>>>>>>>>>>>>>>>>>>>>>
/*  dividing by 100 -- we are converting it into dollar
    tofixed method gives the number after dot  --- for 59 line */
// product data is coming from data/product.js 
let productsHTML = '';
products.forEach( (product) => {
    //  we are creating an html using java script
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
                //  * 10 because product iamges name is 40 or 45 not 4.5..
                    src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.priceInCents / 100).toFixed(2)}
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

            <button class="add-to-cart-button button-primary js-add-to-cart"  data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;
    // console.log(html);
});
// console.log(productsHTML);
//  generating an html 
let gridBox = document.querySelector('.js-product-grid');
gridBox.innerHTML = productsHTML;

//  Adding to cart using event listener 
let addToCartButton = document.querySelectorAll('.js-add-to-cart');
// console.log(addToCartButton+"hshshshsh" );
addToCartButton.forEach( (button) => {
    button.addEventListener('click', () =>{
        const productId = button.dataset.productId;
        let matchingItem;

        cart.forEach((item) =>{
            if(productId === item.productId){
                matchingItem = item;
            }
        });

        if(matchingItem){
            matchingItem.quantity++;
        }else{
            cart.push({
                productId,
                quantity : 1
            });
        }

        // add the quantity 
        let cartQuantity = 0
        cart.forEach( (item) => {
            cartQuantity += item.quantity;
        });
        // upate the cart quantity on page
        let displayQuantity = document.querySelector('.js-cart-quantity');
        displayQuantity.innerHTML = cartQuantity; 
        console.log(cart);
        console.log(cartQuantity);
    });
});