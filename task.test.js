const {studentScores, scoreIncrease, square,
    booksDistribution,timings,expensesTracking,
    letterGrade,sort_and_displayList,orderFiltering, discountedPrice, discountedPriceContinued} = require ("./task.js");

test("to check that studentscore returns correct result",()=>{
    let scores =  [20,50,77,80,10];
    let result = [77,80];
    let answer = studentScores(scores);
    expect(answer).toEqual(result);

})


test("to check that scoreIncrenment returns correct result ",()=>{
   let array = [20,30,70,71,60]
   let result = scoreIncrease(array)
    let expected = [ 25, 35, 75, 76, 65 ]
    expect(result).toEqual(expected)
})

test("to check that square returns correct result ",()=>{
    let array = [20,30]
    let result = square(array)
     let expected = [ 400, 900 ]
     expect(result).toEqual(expected)
 })

test("test that check book distribution works",()=>{
    let books = ["amazon"]
    let names = ["ada"]
    let expected = [{
            "Name": "ada",
            "Book": "amazon"
        }]
    let result = booksDistribution(books,names)
    expect(result).toEqual(expected)
})

test("test that timings function works",()=>{
    let array = ["9:00 AM", "11:00 AM", "1:00PM", "3:00 PM","5:00 PM"]
    let result = timings(array)
    let expected =["1:00PM", "3:00 PM","5:00 PM"]
    expect(expected).toEqual(result)
})

test("test that expensesTracking function works",()=>{
    let record = { "groceries": 10, "dining out": 10, "transportation": 10, "entertainment": 10 }
    let expected = 40
    let result = expensesTracking(record)
    expect(expected).toBe(result)
})


test("test that letterGrade function works",()=>{
    let array = [60,70,81,90,20]
    let expected = ["D","C","B","A","F"]
    let result = letterGrade(array)
    expect(expected).toEqual(result)
})


test("test that sort_and_displayList function works",()=>{
    let shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        ];
    let expected = "Apples";
    let result = sort_and_displayList(shoppingList)
    expect(result).toBe(expected)

})

test("test that orderFiltering function works",()=>{
    let orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] }
        ];
    let expected =[
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] }
        ];
    let result = orderFiltering(orders)
    expect(result).toEqual(expected)


})

test("test that discountedPrice function works",()=>{
    let products = [
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 600 },
        { name: "Mouse", price: 25 },
        { name: "Monitor", price: 200 }
        ];
    let expected = [
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 600 },
        { name: "Monitor", price: 200 }
        ];

    let result = discountedPrice(products)
    expect(result).toEqual(expected)

        let expected2 =
      [
        { name: 'Laptop', price: 1200, 'discounted price': 1188 },
        { name: 'Phone', price: 600, 'discounted price': 594 },
        { name: 'Monitor', price: 200, 'discounted price': 198 }
      ];
    let result2 = discountedPriceContinued(expected)
    expect(result2).toEqual(expected2)
})