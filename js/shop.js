// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
function buy(id) {
  for (let product in products) {
    const item = products[product];
    if (id === item.id) {
      cartList.push({
        ...item,
        quantity: 1,
      });
    }
  }
}

// Exercise 2
function cleanCart() {
  cartList.splice(0, cartList.length);
}

// Exercise 3
// Calculate total price of the cart using the "cartList" array
function calculateTotal() {
  let total = 0;
  for (let cartItem = 0; cartItem < cartList.length; cartItem++) {
    const item = cartList[cartItem];
    total = total + item.price * item.quantity;
    console.log(total);
  }
}

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
function generateCart() {
  for (let i = 0; i < cartList.length; i++) {
    let repeated = false;

    for (let item of cart) {
      if (item.id === cartList[i].id) {
        repeated = true;
        item.quantity++;
      }
    }
    if (!repeated) {
      cart.push(cartList[i]);
    }
  }
  document.getElementById("count_product").innerText = cart.length;
  printCart();
}

// Exercise 5
// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {
  for (let product of cart) {
    let total = 0;
    if (product.quantity >= 10 && product.id === 3) {
      total =
        total +
        product.price * product.quantity * (1 - product.offer.percent / 100);
      console.log("total id3: $" + total);
    }
    if (product.quantity >= 3 && product.id === 1) {
      total =
        total +
        product.price * product.quantity * (1 - product.offer.percent / 100);
      console.log("total id1 $" + total);
    }
  }
}

// Exercise 6
// Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {
  const cart_List = document.getElementById("cart_list");
  outputCart = "";
  cart.forEach((item) => {
    outputCart += `
              <tr>
              <th scope="row">${item.name}</th>
              <td class="price">${item.price}</td>
              <td class="qty">${item.quantity}</td>
              <td>$ ${item.price * item.quantity}</td>
              </tr>
      `;
    cart_List.innerHTML = outputCart;
  });
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
