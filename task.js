

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


const booksDistribution =(books,names)=>{
    let bookCollection = []
    let collection = {
        "Name": null,
        "Book": null
    }
    for (let people of names){
        collection.Name = people
        for(let book of books){
            collection.Book = book
        }
        bookCollection.push(collection)
    }

    return bookCollection
}

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

function letterGrade(array) {
    let letters = array.map((num)=>{
        if(num >=90 && num <= 100){return "A"}
        else if(num >=80 && num <= 89){return "B"}
        else if(num >=70 && num <= 79){return "C"}
        else if(num >=60 && num <= 69){return "D"}
        else if(num < 60){return "F"}
            else{return "NaN"}
    })
}
letterGrade(array)

module.exports = {studentScores, scoreIncrease,square, booksDistribution,timings,expensesTracking};