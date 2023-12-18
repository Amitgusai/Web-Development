// String
let score = 23

let inScore = String(score)
console.log(inScore);
console.log(typeof inScore)

// Number
let isLoggedIn = "89Amit"

let isLoggedIn_2 = Number(isLoggedIn)
console.log(isLoggedIn_2)
console.log(typeof isLoggedIn_2)

// Nan => Not a Number 
// The type of NaN is a 'Number'
// In javascript, sometimes Conversion happens, sometimes the actual value doesn't change as above Example


// Boolean
let ans = 0

let ans_1 = Boolean(ans)
console.log(typeof ans_1)
console.log(ans_1)

// Experiment
let Empty = undefined 
let Empty_1 = null
let Empty_2 = "filled string" 
let Empty_3 = "" // Empty String

// This can be changed into any "data type" conversion 
let Empty_num = Number(Empty_3)
console.log(typeof Empty_num)
console.log(Empty_num)

// RESULT :-

// undefined => NaN 
// null => 0
// "" => Empty_String - 0
// "filled string" => NaN























































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