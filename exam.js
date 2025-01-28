const array = [
   
   
   
    {
      a:10,
      b:20
    },
    
       
    {
      c:10,
      b:20
    },
    
       
    {
      a:10,
      c:20
    }
    
    ]

//  let suma = 0;
//  let sumb = 0;
//  let sumc = 0;
//  let result = {};

//     for (let index = 0; index < array.length; index++) {

//         suma += array[index].a || 0

//         sumb += array[index].b || 0

//         sumc += array[index].c || 0
        
//         console.log(array[0]);
        
        
//     }

//     console.log(array[0]);


    
   
// console.log(suma, sumb, sumc);


// const result = {};
//    for (var i = 0; i < array.length; i++) {
//      array[i]
//      for (var prop in array[i]) {
       
//        if(!result[prop]){
//          result[prop] = 0
//        }
//        result[prop] += array[i][prop]
        
//      }
//    }
   
//    console.log(result)
   

const result = {}; // Object to store the sums

// Outer loop to iterate through the array
for (let i = 0; i < array.length; i++) {
  const obj = array[i];

  // Inner loop to go through the properties of each object
  const keys = Object.keys(obj); // Get the keys of the current object
  for (let j = 0; j < keys.length; j++) {
    const key = keys[j];
    const value = obj[key];

    // Add the value to the result or initialize it
    if (result[key]) {
      result[key] += value;
    } else {
      result[key] = value;
    }
  }
}

console.log(result);





   

