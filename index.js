let itemprice = prompt ("Please enter the price of your item (remember to include the $ sign):");

let discount = parseFloat(itemprice.slice(1)*0.9)

// 10% of $49.99 is $44.991 so I added the following line to round it to two decimals.

let newprice = discount.toFixed(2)

console.log("Congratulations! You are eligible for our 10% discount! The price on your item is now $" + newprice);