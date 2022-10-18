console.log("=======Assignment no-1==========");
console.log("-----------Q1-----------------");
var myString = "I am very good IT Developer";
console.log(`Input String="${myString}"`);
var lowerVowels = "aeiou";
var upperVowels = "AEIOU"
var vowelCount = 0;
for (let index = 0; index < myString.length; index++) {
    var char = myString.charAt(index);
    var isLowerAvailabe = lowerVowels.includes(char);
    var isUpperAvailable = upperVowels.includes(char);
    if (isLowerAvailabe || isUpperAvailable) {
        vowelCount = vowelCount + 1;
    }
}
console.log(`Present vowels in input String:${vowelCount}`);


console.log("-------------Q2----------------------");
function cube(arg) {

    var addition = 0;
    var temp = 0;
    for (let index = 1; index <= arg; index++) {

        temp = index * index * index;
        addition = addition + temp;
    }
    ;
    console.log(`Sum of Cube of numbers from 1 to 5 =${addition}`);

}
cube(5);

console.log("----------------Q3--------------------");
function oddPositionedchars(odd1) {
    var finalstr = "";
    for (let index = 0; index < odd1.length; index++) {
        if (index % 2 != 0 && odd1[index] != " ") {
            finalstr = finalstr + odd1[index];
        }
    } 
    console.log(`Input String="${odd1}"`);
    console.log(`Odd Number Characters="${finalstr}"`);

}
oddPositionedchars("Hard work Always pays Back");
oddPositionedchars("Soon I will be Angular IT Champ");
