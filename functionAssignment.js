console.log("********Function_Assignment********");

console.log("***********Q1***************");
function abhijeet() {

    console.log("Abhijeet koli");
}
abhijeet();

console.log("------------------------------");

function college() {
    console.log("I Am Computer Engineer");
}
college();

console.log("***********Q2****************");
function concat(firstName, lastName) {
    console.log(firstName + lastName);
}
concat("Rohit ", "Sharma");

console.log("************Q3**************");
function swap_values(arg1, arg2) {
    console.log("-------Before Swap----------");
    console.log(arg1, arg2);
    console.log("-------After Swap-------");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values(300, 700);

console.log("************Q4**************");

function name(arg1, arg2, arg3) {
    console.log(arg1 + arg2 + arg3);

}
name(10.23, 600, 40);
name("Hello", "Good", "Morning");

