// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1



function buy(id) {
    
    var productSelected = products.find(product => product.id === id);
    
    
    if (cart.includes(productSelected)){
        console.log('Este producto ha sido selecionado antes. Aumentamos la cantidad');
        productSelected.qty ++; /* No me suma contador mmas que 2? */
    } else{
        
        productSelected.qty = 1;
        cart.push(productSelected);
        console.log(cart);
    }
    productSelected.totalPerItem = productSelected.price*productSelected.qty;
    
    
    
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
}




// Exercise 2
function cleanCart() {
    cart = []
    printCart(cart)
    document.getElementById('cart_list').innerHTML = " "
    

    console.log('Hemos vaciado tu carta de compra, ahora contiene ' + cart.length + ' items.');
}


console.log(cart.length)



// Exercise 3
function calculateTotal() {
    let cartList = [];
    cart.forEach(item => {
        
        cartList.push(item.price*item.qty);        
    })
    cartList = (cartList.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      ));
    let total = Number(cartList.toFixed(2));
    console.log('Total de tu pedido es',total );
    
    // Calculate total price of the cart using the "cartList" array
}
console.log(calculateTotal())



// Exercise 4



function applyPromotionsCart() {
    
    let subtotalWithDiscount = [];
    cart.forEach(product => {
        if  (product.id === 1 && product.qty >= 3) {
            let priceWithDiscFirst = (product.price*product.qty)*((100-product.offer.percent)/100);
            subtotalWithDiscount.push(priceWithDiscFirst);
            cart.forEach(product => {
                if (product.id === 1) {product.totalPerItem = priceWithDiscFirst.toFixed(2)}});
        } else if (product.id === 3 && product.qty >=10) {
            let priceWithDiscThird = (product.price*product.qty)*((100-product.offer.percent)/100);
            subtotalWithDiscount.push(priceWithDiscThird);
            cart.forEach(product => {
                if (product.id === 3) {product.totalPerItem = priceWithDiscThird.toFixed(2)}});
        } else {
            subtotalWithDiscount.push(product.price*product.qty); 
        }
    })
    
    subtotalWithDiscount = (subtotalWithDiscount.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      ));
    total = subtotalWithDiscount;
    return total;
    
    
};
         // Apply promotions to each item in the array "cart"


console.log(applyPromotionsCart())



// Exercise 5
function printCart() {

    
    
    applyPromotionsCart();
    const ticket = document.getElementById('cart_list');
    document.getElementById("cart_list").innerHTML = " "
    for (i=0; i<cart.length; i++){
        const product = cart[i];
        const row = document.createElement('tr');
        row.innerHTML = `<tr>
            <th scope='row'>${product.name}</th>
            <td>${product.price}</td>
            <td>${product.qty}</td>
            
            <td>${product.totalPerItem}</td>
            </tr>`
    ticket.appendChild(row);
    };

document.getElementById('count_product').innerHTML = cart.length;
const totalBin = document.getElementById("total_price");
totalBin.innerHTML = `${total.toFixed(2)}`
    // Fill the shopping cart modal manipulating the shopping cart do}
};

printCart()


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    cart.forEach(product => {
        if (product.id === id){
            product.qty --;
        }
        
    })
    
}

function open_modal() {
    printCart();
};