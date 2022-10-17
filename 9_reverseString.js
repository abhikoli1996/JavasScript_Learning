console.log("============Assignment no 2==========");
function reverseString(str){
var reverse="";
var givenString=str;
var totalChar=givenString.length;
console.log(`Input String=${str}`);
console.log("----Aftr Reverse the String---");
for(let index=totalChar; index >=0; index--)
{
        var charAt=givenString.charAt(index);
        reverse=reverse+charAt
        
 }
 console.log(`Output=${reverse}`);
 console.log("----------------------------------------");
}
  reverseString("Hard work Always pays Back");
  reverseString("Soon I will be Angular IT Champ");
 