console.log("=================Array Assignment 2=====================");
const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log("---------------------Q1-----------------------------");
console.log(`Given Array:`,array_numbers);
let len=array_numbers.length;
console.log(`Length of Given Array Element:`,len);
console.log("---------------------Q2-----------------------------");
console.log("Given Array=", array_numbers);
console.log("First Element of Array=", array_numbers[0]);
console.log("Last Element of Array=",array_numbers[len-1] );



console.log("---------------------Q3-------------------------------");
console.log(`Given Array:`,array_numbers);
console.log(`3rd Last Element:`,array_numbers[8]);

console.log("----------------------Q4-------------------------------");
console.log("Even Numbers of Array");
for(let i=0;i<len;i++)
{
    if(array_numbers[i]%2==0)
    {
        console.log(array_numbers[i]);
    }
}

console.log("----------------------Q5-------------------------------");
console.log("odd Numbers of Array");
for(let i=0;i<len;i++)
{
    if(array_numbers[i]%2!=0)
    {
        console.log(array_numbers[i]);
    }
}
console.log("----------------------Q6-------------------------------");
console.log("Even Position of Array");
for(let i=0;i<len;i=i+2)
{
    
        console.log(array_numbers[i]);
    
}

console.log("----------------------Q7-------------------------------");
console.log("Odd Position of Array");
for(let i=1;i<len;i=i+2)
{
    
        console.log(array_numbers[i]);
    
}
console.log("-----------------------Q8---------------------------------");

let sum=0;
for(let i=0;i<len;i++)
{
    let temp=array_numbers[i];

    sum=sum+temp;
}    

console.log("Sum Of Given Array Number:",sum);

console.log("------------------------Q9--------------------------------");
console.log("Multiple by 5");
for(let i=0;i<len;i++)
{
    if(array_numbers[i]%5==0)
    {
    
        console.log(array_numbers[i]); 
    
    }
    
}
console.log("--------------------------Q10-----------------");
console.log("Given Array:",array_numbers);
console.log("115 is Available in Given Array:",array_numbers.includes(115));

console.log("--------------------------Q11-----------------");
console.log("Given Array:",array_numbers);
console.log("23 is Available in Given Array:",array_numbers.includes(23));
