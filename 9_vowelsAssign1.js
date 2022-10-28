
console.log("---------------Assignment no-1---------------------");
console.log("Q1.count Vowels from given String using includes()");


    var string="Good Morning IT Champ";
    var vowels=["a","e","i","o","u"];
    
    console.log(`Input string=${string}`);
    var count=0;
    var strLowerCase=string.toLowerCase();
    var totalChar=strLowerCase.length;
   

   for(let i=0;i<vowels.length;i++){
     if(string.includes(vowels[i]))
     {
        console.log(vowels[i]);
        count=count+1;
        
     }

    }
   
console.log(`Total Vowels in Given String=${count}`);

console.log("---------------------------------------------------");
console.log("Q2.count Vowels from given String");

function abs(string){
    var count=0;
    console.log(`Input string=${string}`);
    
    var strLowerCase=string.toLowerCase();
    var totalChar=strLowerCase.length;
   
    for (let index = 0; index <=totalChar; index++) {
    var char=strLowerCase.charAt(index);
   
    if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u")
    {
       console.log(char);
       count=count+1;  
    }
}
console.log(`Total Vowels in Given String=${count}`);
}
abs("I Love JavaScript");

console.log("----------------------------------------------");
console.log("Q3.Sum of all Numbers from 1 to 10");

var addition=function(arg) {
   var add=0;
   
   for(let index=0; index<=arg;index++)
   {
      add=add + index;
   }
   console.log(`Addition of 1 to 10 numbers=${add}`);
 
}

   addition(10);
console.log("---------------------------------------------------");
console.log("Q4.sum of sqaure number of 1 to 5");

function sqaure(arg) {

   var addition=0;
   var temp =0;
   for(let index=1; index<=arg;index++)
   {
      
      temp=index*index;
      addition=addition+temp;
   }
  ;
   console.log(`Addition of 1 to 5 square numbers=${addition}`);
 
}
  sqaure(5);

  console.log("--------------------Q5.1-------------------------------");
 
 function evenPositionedchars(even1){
   var finalstr="";
    for(let index=0; index <even1.length; index++)
    {
    if(index%2==0 && even1[index]!=" ")
    {
       finalstr=finalstr+even1[index];
              
    }
    
   }console.log(finalstr); 
   
 }
 evenPositionedchars("Hard work Always pays Back");
 evenPositionedchars("Soon I will be Angular IT Champ");

 console.log("----------------Q5.2--------------------");
 function oddPositionedchars(odd1){
   var finalstr="";
    for(let index=0; index <odd1.length; index++)
    {
    if(index%2!=0 && odd1[index]!=" ")
    {
       finalstr=finalstr+odd1[index];
              
    }
    
   }console.log(finalstr); 
   
 }
 oddPositionedchars("Hard work Always pays Back");
 oddPositionedchars("Soon I will be Angular IT Champ");