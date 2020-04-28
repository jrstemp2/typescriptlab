
//----------------------PART 1-----------------------
interface Mountain {
    name:string;
    height:number;
}

//declare array
let mountains:Mountain[] = [{
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
}]

let findNameOfTallestMountain = function(mts:Mountain[]): string{
    let max:number = 0;
    let name:string = '';
    for (let m of mts){

        if(m.height >= max){
            max = m.height;
            name = m.name;
        }
    }
    return name;
}

let highest:string = findNameOfTallestMountain(mountains);

//----------------------------------------------------
//----------------------PART 2------------------------

interface Product {
    name:string;
    price:number;
}

let products:Product[] = [{
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
}]



let calcAverageProductPrice = function(prods:Product[]): number{
    let sum:number = 0;
    for (let p of prods){
        sum += p.price;
    }
    let average:number = sum/prods.length;
    return average;
}


let avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);

//----------------------------------------------------
//-----------------------PART 3-----------------------
interface InventoryItem {
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[] = [{
    product: {name: "motor",
    price: 10.00},
    quantity: 10
},
{
    product: {name: "sensor",
    price: 12.50},
    quantity: 4
},
{
    product: {name: "LED",
    price: 1.00},
    quantity: 20
}];

let calcInventoryValue = function(ivty:InventoryItem[]): number{
    let sum:number = 0;
    let prod:number = 0;
    for (let i of ivty){
        sum += (i.product.price * i.quantity);
    }
    
    return sum;
}

let totalValue:number = calcInventoryValue(inventory);
console.log(totalValue);
//----------------------------------------------------