// print rendon number 

// function GetrendonNumber(max, min) {
//     return Math.floor(Math.random() * (max - min +1 ))+min;
// }
// console.log(GetrendonNumber(1,6));


// short some name 

// const Name = ["z","a", "b", "c", "d", ]

// console.log(Name.sort());

// sort some numbers

const numbers = [5, 1, 8, 3, 9]

// console.log(numbers.sort((a,b) => a - b));

console.log(numbers.sort(function(a,b) {

    return a - b;
}

));



// print Factorial number

// const printFactorialNumber = (number) => {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * printFactorialNumber(number - 1);
//   }
// };


