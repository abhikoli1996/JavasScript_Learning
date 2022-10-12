console.log("======= operator Assignment ==========");

console.log("----------------------Q1---------------------------");
var greatest_num = function (num1, num2) {
    var result = num1 > num2 ? num1 : num2;
    console.log("Greatest Number is:", result);
}
greatest_num(10, -10);
greatest_num(800, 899);


console.log("----------------------Q2---------------------------");
var isEvenOdd = function (num1) {
    var result = (num1 % 2 == 0) ? true : false;
    return result;
}
console.log("Result of 29:", isEvenOdd(29));
console.log("Result of 44:", isEvenOdd(44));
console.log("Result of 0:", isEvenOdd(0));
console.log("Result of 101:", isEvenOdd(101));
console.log("---------------------Q3----------------------------");
var EvenOdd = function (word) {
    var fullLength = word.length;
    var character = fullLength % 2 == 0 ? "EVEN" : "ODD";
    return character;
}
console.log("Length of JavaScript: ", EvenOdd("JavaScript"));
console.log("Length of Developer: ", EvenOdd("Developer"));
console.log("Length of Google: ", EvenOdd("Google"));




