console.log("==================Array Assignment 1===============");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("---------------------Q1----------------------------------");
console.log("Given Fruits Array=", fruits_seasonal);
console.log("Array First Element=", fruits_seasonal[0]);
console.log("Array Last Element=", fruits_seasonal[4]);

console.log("-------------------------Q2-----------------------------");
fruits_seasonal.unshift("Papaya");
console.log(`Adding One Element "Papaya" Before "Banana"`, fruits_seasonal);

console.log("-------------------------Q3-----------------------------");
fruits_seasonal.splice(4, 1);
console.log(`After Removing "Mango" Element:`, fruits_seasonal);

console.log("-------------------------Q4------------------------------");
fruits_seasonal.splice(5, 1, "Pineapple")
console.log(`After Adding last element "Pineapple":`, fruits_seasonal);

console.log("-------------------------Q5-------------------------------");
fruits_seasonal.splice(4, 0, "Dragon fruit")
console.log(`Adding Element "Dragon Fruits" Before "Water Melon":`, fruits_seasonal);

console.log("-------------------------Q6-------------------------------");
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(`Replace "Orange" with "Kiwi":`, fruits_seasonal);

console.log("-------------------------Q7--------------------------------");
let ab = fruits_seasonal.slice(1, 4);
console.log(`Element starting from 1 to 4:`, ab);

console.log("-------------------------Q8--------------------------------");
console.log(`Last 3 Elements of Array:`,fruits_seasonal.splice(fruits_seasonal.length-3));



