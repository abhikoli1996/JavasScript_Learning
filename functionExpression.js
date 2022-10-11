console.log("Function Expression Assignment");
 
console.log("--------Q1--------");
var square=function(value) {
    console.log("Number= "+value ,"Sqaure of Number= "+value*value);
    console.log("*******************");
    
}
    square(5);
    square(6);
    square(25);
    square(100);

    console.log("--------Q2--------");
    var square=function(value) {
        square= typeof(square);
        console.log("Type of Expression= "+square);
    }
    square();
    console.log("********************");
    console.log("--------Q3--------");

    var triangle= function(base,height){
        console.log("Base of Triangle="+base);
        console.log("Height="+height);
        console.log("Area of Triangle="+0.5*base*height);

    }
     triangle(45,34);
     console.log("********************");
    console.log("--------Q4--------");
    var rect= function(length,width){
        console.log("length= "+length);
        console.log("width= "+width);
        console.log("Area of Rectangle= "+length*width);

    }
    rect(499,917);

    console.log("********************");
    console.log("--------Q5--------");
    var swap_values= function (arg1,arg2){
        console.log("Before Swap= ",arg1,arg2);
      
        var temp=arg1;
        arg1=arg2;
        arg2=temp;
        console.log("After Swap= ",arg1,arg2);
    
    }
    swap_values("virat","Anushka");
   
    swap_values(1000,2000);

    console.log("********************");
    console.log("--------Q6--------");

    var str="JavaScript the most popular language";
    console.log(str);

        var count=str.length;
        console.log("Count of chracter=",count);

        var char= str.indexOf('S');
        console.log("Index of Charcter S=",char);

        var char= str.indexOf('lang');
        console.log("Index of string lang=",char);

        var last= str.charAt(count-1);
        console.log("Last Character=",last);

        var abhi=str.charAt(count-3);
        console.log("3rd last character=",abhi);


    