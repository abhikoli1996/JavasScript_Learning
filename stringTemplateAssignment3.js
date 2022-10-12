console.log("**********Assignment1*********");
console.log("------------Q1----------------");
var wordLengthSquare=function(word){
    
    var wordLength=word.length;
    console.log("Length of",word,"=",wordLength);
   
    var Square= wordLength*wordLength;
    console.log("Square of ",word,"Length=",Square);
}
wordLengthSquare("JavaScript");
wordLengthSquare("Google");
wordLengthSquare("Developer");

console.log("------------Q2-------------");
function statement () {
    var string="I am Angular Developer";
    console.log(`reverse of "I am React Developer":-  ${(string.split(" ").reverse())}`);
    var givenLength = string.length;
    console.log("Length of String:-",givenLength);
    var totalLength =(string.split(" ").length);
    console.log("Words in String:-", totalLength);
    var result=givenLength/totalLength;
    console.log(`Length of String / total words in string:- ${result}`);
    console.log(`Length of String * total words in string:- ${totalLength*givenLength}`);
}
statement();