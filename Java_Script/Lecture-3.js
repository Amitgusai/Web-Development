// String
let score = 23

let inScore = String(score)
// console.log(typeof inScore)
// console.log(inScore);

// Number
let isLoggedIn = "89Amit"

let isLoggedIn_2 = Number(isLoggedIn)
// console.log(typeof isLoggedIn_2)
// console.log(isLoggedIn_2)

// Nan => Not a Number 
// The type of NaN is a 'Number'
// Conversion of a 'String' to a 'Number' is a little Confusing
// In javascript, sometimes Conversion happens, sometimes the actual value doesn't change as above Example


// Boolean
let ans = 1

let ans_1 = Boolean(ans)
// console.log(typeof ans_1)
// console.log(ans_1)

// Experiment
let Empty_1 = undefined 
let Empty_2 = null
let Empty_3 = "" // Empty String
let Empty_4 = "filled string" 

// This can be changed into any "data type" conversion 
let Empty_num = Number(Empty_1)
console.log(typeof Empty_num)
console.log(Empty_num)

// RESULT :-

// NUMBER data type :-
                        // undefined => NaN 
                        // null => 0
                        // "" => Empty_String - 0
                        // "filled string" => NaN

// Boolean data type :- 
                        // undefined => false
                        // null => false
                        // "" => false
                        // "filled String" => true






















































// let score = "hitesh"

// //console.log(typeof score);
// //console.log(typeof(score));

// let valueInNumber = Number(score)
// //console.log(typeof valueInNumber);
// //console.log(valueInNumber);


// // "33" => 33
// // "33abc" => NaN
// //  true => 1; false => 0

// let isLoggedIn = "hitesh"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// //  console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// // "hitesh" => true

// let someNumber = 33

// let stringNumber = String(someNumber)
// // console.log(stringNumber);
// // console.log(typeof stringNumber);