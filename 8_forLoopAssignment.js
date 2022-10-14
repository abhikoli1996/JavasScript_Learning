console.log("========Assignment of For loop========");
console.log("--------------------Q1----------------------");
for(let num=5;num<=15;num++)
{
    console.log(num);
}

console.log("------------------Q2---------------");
for(let reverse=50;reverse>=40;reverse--)
{
    console.log(reverse);
}

console.log("-------------------Q3------------");
console.log("search first 15 Odd Number");

var countOdd=0;
for(let index=0;index<100;index++){
    if(index%2!=0){
        console.log(index);
        countOdd=countOdd+1;
        if(countOdd==15){
           
            break;
        }
    }
}

console.log("----------------------Q4--------------------");
console.log("find first 10 Even Number");
var countEven=0;
for(let index=2;index<100;index++){
    if(index%2==0){
        console.log(index);
        countEven=countEven+1;
        if(countEven==10){
           
            break;
        }
    }
}

console.log("-------------Q5-------------");
console.log("Print Table of 5");
for(let tab=5;tab<=50;tab=tab+5)
{
    console.log(tab);
}
console.log("------------Q6-------------");
console.log("Print Table of 10");
for(let tab=10;tab<=100;tab=tab+10)
{
    console.log(tab);
}

console.log("------------Q6-----------");
console.log("Print Table of 10 in Reverse Order");
for(let tab=100;tab>=10;tab=tab-10)
{
    console.log(tab);
}