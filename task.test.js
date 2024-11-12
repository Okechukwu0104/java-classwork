const {studentScores, scoreIncrease, square,booksDistribution,timings,expensesTracking} = require ("./task.js");
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