// Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
// Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

// BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

function addingAllTheWeirdStuff(array1, array2){
    // ADD CODE HERE
    let sumOdd = 0;
    let sumEven = 0;
    let increment = 1;
    
    for(let i = 0; i < array2.length; i++) {
      if(array2[i] % 2 !== 0) {
        sumOdd += array2[i];
      }
    }
    
      for(let j = 0; j < array2.length; j++){
      if(array2[j] % 2 === 0) {
        sumEven += array2[j];
      }
    }
    
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] < 10) {
         array1[i] += sumOdd;
      } else {
         array1[i] += sumEven;
      }
    }
    
    for(let i = 0; i < array2.length; i++) {
      if(array2[i] > 20) {
        for(let j = 0; j < array1.length; j++){
          array1[j] += increment;
        }
      } 
    }
    return array1;
          
  }

  
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5]));

  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22]));