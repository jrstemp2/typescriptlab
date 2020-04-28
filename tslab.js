//declare array
var mountains = [{
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }];
var findNameOfTallestMountain = function (mts) {
    var max = 0;
    var name = '';
    for (var _i = 0, mts_1 = mts; _i < mts_1.length; _i++) {
        var m = mts_1[_i];
        if (m.height >= max) {
            max = m.height;
            name = m.name;
        }
    }
    console.log(name);
};
findNameOfTallestMountain(mountains);
var products = [{
        name: "Hershey Bar",
        price: 1.99
    },
    {
        name: "Twix Bar",
        price: 1.79
    },
    {
        name: "Snickers Bar",
        price: 2.15
    }];
var calcAverageProductPrice = function (prods) {
    var sum = 0;
    for (var _i = 0, prods_1 = prods; _i < prods_1.length; _i++) {
        var p = prods_1[_i];
        sum += p.price;
    }
    var average = sum / prods.length;
    return average;
};
var avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
var inventory = [{
        product: { name: "motor",
            price: 10.00 },
        quantity: 10
    },
    {
        product: { name: "sensor",
            price: 12.50 },
        quantity: 4
    },
    {
        product: { name: "LED",
            price: 1.00 },
        quantity: 20
    }];
var calcInventoryValue = function (ivty) {
    var sum = 0;
    var prod = 0;
    for (var _i = 0, ivty_1 = ivty; _i < ivty_1.length; _i++) {
        var i = ivty_1[_i];
        sum += (i.product.price * i.quantity);
    }
    return sum;
};
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
//----------------------------------------------------
