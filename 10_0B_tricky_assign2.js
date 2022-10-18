console.log("============0B_Tricky_Assignment2==========");
function reverseString(str){
var reverse="";
var givenString=str;
var totalChar=givenString.length;
console.log(`Input String=${str}`);
for (let index = totalChar; index >= 0; index--) {
  var charAt = givenString.charAt(index);
  if (charAt != " ") {
    reverse = reverse + charAt

  }
}
console.log(`Reverse String Output:- "${reverse}"`);
console.log("----------------------------------------");
}
  reverseString("Hard work Always pays Back");
  reverseString("Soon I will be Angular IT Champ");
