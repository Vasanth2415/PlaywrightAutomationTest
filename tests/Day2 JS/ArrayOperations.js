let products = [
{id:101,name:"Asus",type:"Laptop",price:28},
{id:102,name:"Apple",type:"Laptop",price:55},
{id:103,name:"Redmi",type:"Smartphone",price:20},
{id:104,name:"Samsung",type:"Appliances",price:13}
];

// Filter
let filteredProducts = products.filter(product => product.price <50);

console.log("Products with price less than 50: ");
console.log(filteredProducts);

// Map
let productNames = filteredProducts.map(product => product.name);
console.log("Product Names: ");
console.log(productNames);

// Reduce
let totalPrice = filteredProducts.reduce(
    (sum,product) => {
    return sum + product.price;
},0)


console.log("Total Price of filtered Products: ");
console.log(totalPrice);