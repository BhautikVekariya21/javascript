let amazon =[49.99,129.99,89.95,348.00,149.95,199.99,249.00,299.00,24.90,299.00 ]
  
const cartvalue = amazon.reduce(function totalcart(accumulator,currentvalue){
    console.log(`accumulator conatin ${accumulator} and current value is ${currentvalue}`);
    return accumulator+currentvalue
},0)

console.log(cartvalue);

const prices = [15.99,199.99,29.95,499.00,79.99,349.00,22.50,249.99,12.99,299.00];
 
const catvalue = prices.reduce(function totalcart(accumulator,currentvalue){
    console.log(`accumulator conatin ${accumulator} and current value is ${currentvalue}`);
    return accumulator+currentvalue
},100)

console.log(catvalue);

const shoppingCart = [
    {
        itemName: "Echo Dot (4th Gen)",
        price: 49.99,
        buyersLastMonth: 3500
    },
    {
        itemName: "Kindle Paperwhite",
        price: 129.99,
        buyersLastMonth: 2000
    },
    {
        itemName: "Instant Pot Duo 7-in-1",
        price: 89.95,
        buyersLastMonth: 1500
    },
    {
        itemName: "Sony WH-1000XM4 Wireless Headphones",
        price: 348.00,
        buyersLastMonth: 1200
    },
    {
        itemName: "Fitbit Charge 5",
        price: 149.95,
        buyersLastMonth: 1800
    },
    {
        itemName: "Ninja Foodi Air Fryer",
        price: 199.99,
        buyersLastMonth: 900
    },
    {
        itemName: "Apple AirPods Pro",
        price: 249.00,
        buyersLastMonth: 2200
    },
    {
        itemName: "Ooni Koda 12 Gas Pizza Oven",
        price: 299.00,
        buyersLastMonth: 700
    },
    {
        itemName: "Lodge Cast Iron Skillet",
        price: 24.90,
        buyersLastMonth: 5000
    },
    {
        itemName: "Bose QuietComfort 35 II",
        price: 299.00,
        buyersLastMonth: 850
    },
    {
        itemName: "GoPro HERO9 Black",
        price: 399.00,
        buyersLastMonth: 650
    },
    {
        itemName: "Samsung Galaxy Tab S7",
        price: 649.99,
        buyersLastMonth: 550
    }
];

const qtvalue = shoppingCart.reduce((accumulator,currentvalue)=>accumulator+currentvalue.price,0)

const cutietvalue = shoppingCart.reduce((accumulator,currentvalue)=>accumulator+currentvalue.buyersLastMonth,0)

console.log(qtvalue);
console.log(cutietvalue);

