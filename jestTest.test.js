// let {addNumbers, evenNumbers} = require("./add.js");

// test("Add two numbers", () =>{
//     let a = 3;
//     let b = 5;
//     let answer = addNumbers(a, b);
//     expect(answer).toBe(8);
// })

// test("Filter even numbers", () =>{

//     let arr = [1, 2, 3, 4, 5, 6];
//     let answer = evenNumbers(arr);
//     expect(answer).toEqual([2, 4, 6])

// })

const scoress = require("./arrayMethods.js");

test("student grades", ()=> {
    expect(scoress(95)).toBe("A");
    expect(scoress(78)).toBe("C");
    expect(scoress(85)).toBe("B");
    expect(scoress(60)).toBe("D");
    expect(scoress(45)).toBe("F");
    expect(scoress(92)).toBe("A");  
});

