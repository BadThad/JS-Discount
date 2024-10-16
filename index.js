let itemprice = prompt ("Please enter the price of your item (remember to include the $ sign):");

let discount = parseFloat(itemprice.slice(1)*0.9)

console.log("Congratulations! You are eligible for our 10% discount! The price on your item is now $" + discount);