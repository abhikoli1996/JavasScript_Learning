var myString="Good Morning IT Champ";
var lowerVowels="aeiou";
var upperVowels="AEIOU"
var vowelCount=0;
for(let index =0;index<myString.length;index++)
{
    var char =myString.charAt(index);
    var isLowerAvailabe= lowerVowels.includes(char);
    var isUpperAvailable= upperVowels.includes(char);
    if(isLowerAvailabe||isUpperAvailable){
        vowelCount=vowelCount+1;
    }
}
console.log(`Total voewls COunt:${vowelCount}`);