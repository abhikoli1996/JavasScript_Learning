console.log("----------Assignment on Arrow Function-----------");
console.log("----------------------------Q1---------------------------------");
let result = () => {
    console.log(` Inside Arrow Function-> ${"Good Morning, Today is Friday."}`);
}
result();
console.log("----------------------------Q2---------------------------------");
let show = (n1, n2, n3 = 2) => {
    console.log(n1 * n2 * n3);
}
console.log(`Passed 3 value Multiplication`);
show(5, 5, 2);
console.log("passed 2 value Multiplication and 3rd argument kept default");
show(10, 4);

console.log("---------------------------Q3---------------------------------");
let sum = (n1, n2, n3, n4, n5) => {
    return n1 + n2 + n3 + n4 + n5
}
console.log(`sum of 5 Argument="${sum(100, 100, 200, 349, 756)}"`);
console.log(`concat of given arrow function is="${sum("I am", "Learning", "ES6", "features", "in depth")}"`);