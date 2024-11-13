const orders = [
{ id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
{ id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
{ id: 3, items: [{ price: 30, quantity: 1 }] },
];
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 600 },
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 200 }
    ];

const  studentScores = (array)=>{
    let scores = array.filter((num)=> num >= 70)
    return scores
}

const scoreIncrease = (array)=>{
    let increasedScore = array.map((num)=>{
        return num + 5
    })
    return increasedScore
}

const square = (array)=>{
    let result = array.map((num)=>{
        return num * num
    })
    return result
}

let books = ["amazon","History","48 laws of power"]
let names = ["ada","peter","ifunanya"]
const booksDistribution = (books, names)=> {
    let bookCollection = [];
    let bookIndex = 0;

    for (let people of names) {
        let collection = {
            "Name": people,
            "Book": books[bookIndex]
        };
        bookCollection.push(collection);
        bookIndex++;
    }

    return bookCollection ;
}
booksDistribution(books, names);


const timings =(times)=>{
    let afternoonClasses = times.filter((time)=>time.endsWith("PM"))
    return afternoonClasses
}

const expensesTracking =(record)=>{
    total = 0
    for(let money in record){
        total+=record[money]
    }
    return total
}

let array = [60,70,81,90,20]

const letterGrade = (array)=>{
    let letters = array.map((num)=>{
        if(num >=90 && num <= 100){return "A"}
        else if(num >=80 && num <= 89){return "B"}
        else if(num >=70 && num <= 79){return "C"}
        else if(num >=60 && num <= 69){return "D"}
        else if(num < 60){return "F"}
            else{return "NaN"}
    })
    return letters
}
letterGrade(array)


const sort_and_displayList = (shoppingList)=>{
    let healthyItems = shoppingList.filter((value)=>value.isHealthy)
    for(let products of healthyItems){
        let printing = products.name
        return printing
    }
}

const orderFiltering = (orders)=>{
let lessThan100$ = orders.filter((product)=>{
        let orderCase = product.items;
        let total = 0;

        for(let count = 0; count < orderCase.length; count++) {
            let p$qCase = orderCase[count]
            let calc = p$qCase.price * p$qCase.quantity
            total += calc;
        }
        return total < 100;
    })
        return lessThan100$

}
let result = orderFiltering(orders)
function filteredOrderDisplay(result){
    let output = ""
    result.forEach((content)=>{
        output +=`Item ID: ${content.id}\n`
        content.items.forEach((content)=>{
            output+= `\tTotal Cost of ${content.items}:  ${content.price * content.quantity}\n`
        })
    })
    return output
}
filteredOrderDisplay(result)

const discountedPrice = (products)=>{
    let highCostProducts = products.filter((product)=>product.price > 50)
    return highCostProducts
}
let printingDiscount = discountedPrice(products)


const discountedPriceContinued = (printingDiscount)=>{
    let discount = printingDiscount.map((content)=>{
        let result = {...content,"discounted price": (content.price - (content.price * 0.01)) }
        return result
    })
    return discount
}


module.exports = {studentScores, scoreIncrease,square
    , booksDistribution,timings,expensesTracking,
    letterGrade,sort_and_displayList,orderFiltering, discountedPrice, discountedPriceContinued};
//,discountedPrice