class Cart{

    constructor(){
        this.items=[];
    }

    addItem(product){
        this.items.push(product);
    }

    removeItem(productId){
        this.items = this.items.filter(item => item.id !==productId);
    }

    getItems(){
        return this.items;
    }
}


const cart = new Cart();

cart.addItem({
    id:1,
    name:"Apple",
    price:4000
});


cart.addItem({
    id:2,
    name:"Orange",
    price:2000
});

cart.addItem({
    id:3,
    name:"Banana",
    price:1300
});

console.log(cart.getItems());
cart.removeItem(1);
console.log(cart.getItems());
