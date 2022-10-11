console.log("=========String Template Assignment 2==========");
var temp= function stringHandsOn(){
    console.log("======================Q1=====================");
    var string="  Hey you are doing good, keep it up  ";
    console.log("original String=",string);
   
   console.log("======================Q2======================");
   var LengthOfString=string.length;
   console.log("Length of given string=",LengthOfString);

   console.log("====================Q3======================");
   var space=string.trim();
   
   console.log("AFter Removing Spaces=",space);
   
   console.log("====================Q4=====================");
   
   var count=space.length;
   var abhi=LengthOfString-count;
   console.log("Number of spaces=",abhi);
   
   console.log("===================Q5========================");
   console.log("first character:-",space.charAt(0),"last character:-",space.charAt(count-1));

   console.log("===================Q6======================");
   var sSplit=space.split(" ");
   console.log("Total no.of word:-",sSplit.length);

   console.log("===================Q7=======================");
   console.log(`Index no. of "good":-`,string.indexOf("good"));

   console.log("===================Q8========================");
   console.log("substring from index 22:-",string.substring(22));
     
     console.log("slice from index 22:-",string.slice(22));

     console.log("==================Q9=========================");
     console.log(`string end with "up":-`,string.includes("up"));

     console.log("====================Q10=======================");
     console.log(`string start with "Hey":-`,space.includes("Hey"));
}

temp();