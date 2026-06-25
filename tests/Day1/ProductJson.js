let products = [
{id:101,name:"Asus",type:"Laptop",price:28000},
{id:102,name:"Apple",type:"Laptop",price:55000},
{id:103,name:"Redmi",type:"Smartphone",price:20000},
{id:104,name:"Samsung",type:"Appliances",price:35000}
];


for(let product of products){

    console.log("Product Id: " + product.id);
    console.log("Product Name: "+ product.name);
    console.log("Product Type: "+ product.type);
    console.log("Product Price: "+ product.price);
    
    console.log(products[0].name);
    console.log(products[3].price);
    console.log(products[1].type);
    console.log("----------------------");
}



