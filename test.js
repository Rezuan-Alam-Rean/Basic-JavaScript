// 1. Write a function that can print any random number between any two given numbers (including them).

// 2. How can you order roll numbers of students in your class sequentially?

// 3. How can you order names of students in your class sequentially?




//  function GetrendomNumber(max, min){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//  }

//  console.log(GetrendomNumber(1,6))



//  Answer 1

//  We can use Math.random() function to generate a random number between 0 and 1. Then we multiply this number by the difference between max and min and add min to get a random number within the given range.

//  function random(max, min) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
    
//  }

// console.log(random(1,6));


// function ludu(a, b) {

//     return Math.floor(Math.random() * (a-b + 1) ) + b ;
// }

// console.log(ludu(1,6));