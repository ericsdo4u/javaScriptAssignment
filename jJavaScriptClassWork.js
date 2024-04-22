var name1 = 5000;
var name2 = 3000;
var name3 = name2;
if (name1 != name2);
console.log("Donald");

x = 4;
y = 6;
sum = 2 * (x + y);
console.log(sum)


x = 11 ;
values = x % 10;
sum = x + values;
console.log(sum);


x = 3;
result = x * 3;
console.log(result);


console.log(typeof null);

let person = {
firstName : "donald",
lastName : "ddon",
dob : 12,
}

console.log(person);


let ans = {
     id : 123,
     available : true,
     count : 2,
     name : "ddon",
     author : "eric",
};

console.log(ans);


let left_operaand = 2;
let right_operand = 3;
let anss = 0;
let operator = "";
 if (operator == " + "){   
   anss = left_operaand + right_operand
 }
 else if (operator == " * "){ 

    anss = left_operaand * right_operand
 } else if (operator == " / "){

    anss = left_operaand / right_operand
 } else {

    anss = left_operaand - right_operand
 } ;
 console.log(anss);

 
 let arrs = [2, 4, 5, 1];
 arrs.push(3);
 console.log(arrs);


 let arrss = [2, 4, 5, 1];
 arrs.pop();
 console.log(arrss);


 let arr = [2, 4, 5, 1];
 console.log(arr.slice(1))


 let arras = [2, 4, 5, 1];
 console.log(arras.slice(1, 2));


 let arraa = [2, 4, 5, 1];
 console.log(arraa.splice(1, 2));


 let arraaa = [2, 4, 5, 1, 3, 7, 9];
 console.log(arraaa.splice(2, 3));
 console.log(arraaa);

 let arraaaa = [2, 4, 5, 1, 3, 7, 9];
 arraaaa.splice(2, 0, 2, 3);
 console.log(arraaaa);

 let arraaaaa = [2, 4, 5, 1, 3, 7, 9];
 arraaaa.splice(2, 1, 2, 3);
 console.log(arraaaaa);


 let arraaaas = [2, 4, 5, 1, 3, 7, 9];
 let arrass = [2, 4, 5, 1];
 console.log(arraaaas.concat(arrass))

//  let items = [{"Car": 2000}, {"Truck": 500}, {"Bike": 6500}];
//  console.log(items);

 let itemss = [{"Car": 2000}, {"Truck": 500}, {"Bike": 6500}];
 console.log(itemss.shift());


let items = [{"Car": 2000}, {"Truck": 500}, {"Bike": 6500}];
let item2 = [{"Scooter": 1500}]
 console.log(items.concat(item2));


//   let item3 = [{"Car": 2000}, {"Truck": 500}, {"Bike": 6500}];
//   item3[1].push(1)
//  console.log(items3);

let num1 =  [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]];
console.log(num1[1].splice(0, 3));


let name4 = {firstname: "don",
secondname: "eric",
state: "delta",
country: "nieria"};
for (const key in name4) {
   console.log(name4[key]); 
   }

   let array = [1, 2, 3, 4, 5, 6];

   // for (const index in array) {
   //    console.log(array[index]); 
   //    }

   for (const value of array) {
         console.log(value); 
         }


   var obj = {
         name: "donald1",
         population: 132,
         temp: 12,
         currency: "naira"};
        
   var obj1 = {name: "donald",
         population: 334,
         temp: 3,
         currency: "naira"};

   var obj2 = {name: "donald2",
         population: 500,
         temp: 5,
         currency: "naira"};  

   var obj3 = {name: "donald3",
         population: 36,
         temp: 12,
         currency: "naira"};

   var obj4 = {name: "donald4",
         population: 400,
         temp: 22,
         currency: "naira"};

   var obj5 = {name: "donald5",
         population: 300,
         temp: 33,
         currency: "naira"};

   var obj6 = {name: "donald6",
         population: 200,
         temp: 27,
         currency: "naira"};

   var obj7 = {name: "donald7",
         population: 17,
         temp: 19,
         currency: "naira"};

   var obj8 = {name: "donald8",
         population: 102,
         temp: 15,
         currency: "naira"};

   var obj9 = {name: "donald9",
         population: 10,
         temp: 20,
         currency: "naira"};


      let raw_array = [[null, obj, obj1, obj3], [obj4, obj5, obj6, null], [obj7 , null, obj8, obj9]];

      let populationsum = 0;
      
         for(let index = 0; index < raw_array.length; index++){
         for(let item = 0; item < raw_array[index].length; item++){
            if (raw_array[index][item] == null){
               continue;
            }
            if (raw_array[index][item].temp > 10)
            populationsum += raw_array[index][item].population;
            }

            console.log(populationsum);
      }



// this is function declearation
// function calc(x){
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber;
// }
//console.log(calc(3)(2));



// let result = calc(3);
// console.log(result(2));
// console.log(calc(3)(2));



//this is function expression
// const calc = function (x){
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber;
// };
//console.log(calc(3)(2));



// this is arrow function
// const calc = (x) => {
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber;
// };
// console.log(calc(3)(2));


// function in function
// function higherOrderFunction(func){
//     console.log("higher function")
//     func();
// }

// function lowerOrderFunction(){
//     console.log("lower function")
// }

// higherOrderFunction(lowerOrderFunction);



//can also be done this way
// function higherOrderFunction(func){
//     console.log("higher function")
//     func();
// }

// higherOrderFunction(function lowerOrderFunction(){
//     console.log("lower function")
// });




//Arrow function in a function
// function higherOrderFunction(func){
//     console.log("higher function")
//     func();
// }

// higherOrderFunction(() => {
//     console.log("lower function")
// });


// function greetings(greet){
//     return function person(name){
//         return 'Hello, ${name}. ${greet}';
//     }

// }
// console.log(greetings("Good morning!")("John"));



// let sampleInput = [6, 9, 12];
// let divisor =
// for (const value of sampleInput) {
//    if (value % divisor == 0 && value / divisor == 0)
//       console.log(value);
// }
   

let sampleInput1 = [6, 9, 12];
let divisor1 = 3;

for (const value of sampleInput1) {
   if (value % divisor1 == 0 && value / divisor1 == 0) {
      console.log(value);
   }
}