

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


const timings =(times)=>{
    let afternoonClasses = times.filter((time)=>time.endsWith("PM"))
    return afternoonClasses
}

const expensesTracking =(record)=>{
    total = 0
    for(let money in record){total+=record[money]}
    return total
}


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

const filteredOrderDisplay =(orders)=>{
    let result = orderFiltering(orders)
    let output = ""
    result.forEach((content)=>{
        output +=`Item ID: ${content.id}\n`
        content.items.forEach((content)=>{
            output+= `\tTotal Cost of ${content.items}:  ${content.price * content.quantity}\n`
        })
    })
    return output
}

const discountedPrice = (products)=>{
    let highCostProducts = products.filter((product)=>product.price > 50)
    return highCostProducts
}


const discountedPriceContinued = (products)=>{
    let printingDiscount = discountedPrice(products)
    let discount = printingDiscount.map((content)=>{
        let result = {...content,"discounted price": (content.price - (content.price * 0.01)) }
        return result
    })
    return discount
}


module.exports = {studentScores, scoreIncrease,square
    , booksDistribution,timings,expensesTracking,
    letterGrade,sort_and_displayList,orderFiltering,
    discountedPrice, discountedPriceContinued};
//,discountedPrice