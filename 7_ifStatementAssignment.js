console.log("===========Assignment 0B==============");
console.log("--------------Q1---------------------");

function check(num)
{
    if(num%2==0)
    {
        return console.log(num,"is Even Number");
    }
        return console.log(num,"is Odd Number ");
  
    
}
check(45);
check(70);
check(67);
check(98);

console.log("------------------Q2------------------");
function voter(age)
{
    if(age>=18)
    {
        return console.log(age,"is Eligible for Voting");
    }
    
       return console.log(age,"is Not Eligible for voting");
    
    
}
voter(18);
voter(20);
voter(17);
voter(40);

console.log("------------Q3---------------");
function string(str)
{
    var count=str.length;
    if(count>10)
    {
       return console.log( str, "This string contains more than 10");
    }
    
       return console.log(str,"This string Contains not more than 10");
    
}
string("JavaScript-ES6");

console.log("--------------Q4----------------");
function stringJava(stat)
{
    var result=stat.startsWith("Java");
    console.log(stat,`-This string start with "Java"`);
}
stringJava("JavaScript Language");