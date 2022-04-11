//Shopping cart and ambassadors - BuildTime #2

/*
Details:    Today you are in charge of building the shopping cart logic for a website that supports ambassadors. 
            Your job is to build a program flow that will elaborate a list of prices, a user and a shipping cost to calculate the correct cart total. 

            If the user is an ambassador, the cart should be discounted of 30% BEFORE shipping cost (ambassadors still pay shipping)
            If the user is NOT an ambassador, the cart should NOT be discounted
            Either way, if the cart goes over 100, shipping cost should be 0.

            Some users as examples are already provided.
            
           
*/
const shoppingCart = [
  {
   name: "Marco",
   lastName: "Rossi",
   isAmbassador: true,
   price: 50,
 },
 
  {
   name: "Paul",
   lastName: "Flynn",
   isAmbassador: false,
   price: 5,
 },
 
  {
   name: "Amy",
   lastName: "Reed",
   isAmbassador: false,
   price: 2,
 },
 ];
 
 
 const shoppingCartTotal = function () {
   let total = 0;
   let shippingCost = 50;
   for (let i = 0; i < shoppingCart.length; i++) {
     if (shoppingCart[i].isAmbassador === true) {
       total = total + (shoppingCart[i].price * 0.3);
     } 
     else if (shoppingCart[i].isAmbassador === false){
     total = total + shoppingCart[i].price;
     }
   }
   if (total > 100) { 
     total = total;
   }else{
     total = total + shippingCost
   }
   return total
 }
 
 console.log(shoppingCartTotal());
