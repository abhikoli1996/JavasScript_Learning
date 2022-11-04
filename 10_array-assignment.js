console.log("---------------Assignment- Array for removing duplicate elements---------------");
let arrayOfNames = ["Kamat", "Memon", "Nashpati", "Taimur", "Menon", "Kamat", "Andy", "Taimur"];
console.log(`Given Array: ${arrayOfNames}`);
console.log("---------------------B.Array after removing Duplicate Elements-----------------");
let uniqueArray = [...new Set(arrayOfNames)];
console.log(`${uniqueArray}`);
console.log("---------------------C. Count of Duplicate Element-------------------------");
let len = arrayOfNames.length - uniqueArray.length;
console.log(`${len}`);
console.log("---------------------D. Total Number of Unique Element---------------------");
console.log(uniqueArray.length);

