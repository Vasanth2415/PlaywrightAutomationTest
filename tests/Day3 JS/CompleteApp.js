 // Login Validation
const user = {
    username: "Vasantha",
    password: "Mylogin123"
};

function login(username, password) {
    if (
        username === user.username &&
        password === user.password
    ) {
        console.log("Login Successful");
        return true;
    }

    console.log("Invalid Credentials");
    return false;
}

// Product List
let products = [
{id:101,name:"Asus",type:"Laptop",price:28000},
{id:102,name:"Apple",type:"Laptop",price:55000},
{id:103,name:"Redmi",type:"Smartphone",price:20000},
{id:104,name:"Samsung",type:"Appliances",price:35000}
];

// display Products
function displayProducts(){

console.log("\n Available Products: ");

products.forEach(product => {
    console.log(
        `ID: ${product.id}, Name: ${product.name}, Type: ${product.type}, Price: ${product.price}`
    );
});

}


//Cart System

let cart =[];
function addToCart(productId, quantity = 1){

   const product =  products.find(item => item.id === productId);


if(!product){
    console.log("Product not Found");
    return;
}

const existingItem = cart.find(item => item.id === productId);

if (existingItem){
    existingItem.quantity += quantity;
}
else{
    cart.push({
        ...product,quantity
    });
}

console.log(`${product.name} added to cart`);

}


//view Cart

function viewCart(){

    console.log("\n Cart details: ");

    if(addToCart.length ===0){
        console.log("Cart is Empty");
        return;
    }

    cart.forEach(item => {
        console.log(`${item.name} | qty: ${item.quantity} | Total: $${item.price * item.quantity}`);
    
    });

}

// Check Out

function checkout(){

    if(cart.length===0){
        console.log("Cannot check out. cart is empty");
        return;
    }

    let grandTotal = 0;

    cart.forEach(item => {
        grandTotal += item.price * item.quantity;
    });

    console.log("\n ****** Check out****");
    viewCart();
    console.log(`GrandTotal: $${grandTotal}`);
    console.log("Payment Successful");
    console.log("Order Successfully placed");

    cart = [];

}

// Execution

if(login("Vasantha","Mylogin123")){
    displayProducts();
    addToCart(101,5);
    addToCart(102,6);
    addToCart(103,2);

    viewCart();
    checkout();

    viewCart();
} 

