const recursionFnc = (num, arr = []) => {
    if (num <= 100) {
      const newArray = [...arr, num];
      return recursionFnc(num + 1, newArray);
    } else {
      return arr;
    }
  };
  
  // const result = recursionFnc(0, []);
  // console.log(result);

  // const generateNumbers = (limit) => {
  //   const numbers = [];
  //   for (let i = 0; i <= limit; i++) {
  //     numbers.push(i);
  //   }
  //   return numbers;
  // };
  
  // const numbers = generateNumbers(100);
  // console.log(numbers);

  function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120
