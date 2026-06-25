function login(username,password){ // Parameterised Function

const validUsername = "Vasantha";
const validPassword = "Vasantha123";

if(username === validUsername && password === validPassword){
    return "Login Successful";
} 
    return "Login Failure";

}


const products = [
{id:101,name:"Asus",type:"Laptop",price:28000},
{id:102,name:"Apple",type:"Laptop",price:55000},
{id:103,name:"Redmi",type:"Smartphone",price:20000},
{id:104,name:"Samsung",type:"Appliances",price:35000}
];

const cart = [];

function addToCart(productId){
    for(let i=0; i<products.length; i++){
if(products[i].id === productId){
    cart.push(products[i]);
    return products[i].name + " added to cart";
}
    }
return "product not found";
}


console.log(login("Vasantha","Vasantha123"));

console.log("Available Products: ");
console.log(products);

console.log(addToCart(101));
console.log(addToCart(102));
console.log(addToCart(103));
console.log(addToCart(900));

console.log("Cart Items: ");
console.log(cart);