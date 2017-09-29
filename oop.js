class ShoppingCart{
      constructor(){
        this.total = 0;
        this.items = new Map();
      }

      addItem(itemName,quantity,price){
        this.total += price * quantity;
        this.items.set(itemName, quantity);
      }

      removeItem(itemName,quantity,price){
        if(items.get(itemName)<quantity){
          items.delete(itemName);
        }else{
          total -= (price * quantity)
          items.set(itemName,quantity)
        }
      }

      checkOut(cashPaid){
         if(cashPaid<this.total){
          return "Cash paid not enough";
         }else{
            let balance = cashPaid - this.total;
            return balance;
         } 
      }
}


class Shop extends ShoppingCart{
  constructor(){
    super();
    quantity = 500
  }
  
  removeItem(){
    quantity-=1;
  }
}

let itemBought = 'Ovaltine';
let quantity = 2;
let price = 450;
let goToShop = new Shop();
goToShop.addItem(itemBought,quantity,price);
let amountPaid = 1000
let change = goToShop.checkOut(amountPaid);
console.log(change);