const products = [
  { id: 101, name: "Asus", type: "Laptop", price: 28000 },
  { id: 102, name: "Apple", type: "Laptop", price: 55000 },
  { id: 103, name: "Redmi", type: "Smartphone", price: 20000 },
  { id: 104, name: "Samsung", type: "Appliances", price: 35000 }
];


function fetchProducts(){

    return new Promise((resolve,result) => {

        if(products.length > 0){

            resolve(products);
        }else {
            result("No products available");
        }

    });
}


async function displayProducts() {
    
    try{
        const result = await fetchProducts();
        console.log(result);
    }
catch(error){
    console.log(error)
}

}

displayProducts();