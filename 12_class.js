/*console.log("==========Assignment for Class============");
console.log("---------------Q1-----------------");

class Vehicle{
    constructor(companyName,model, price){
        this.companyName=companyName;
        this.model=model;
        this.price=price;
        
    } 
    details(){
        console.log(`Vehicle details :Company name:${this.companyName} model:${this.model} price:${this.price} `);
}
}
let v1=new Vehicle("Hero","splender",85000);
let v2=new Vehicle("Hero","Delux",80000);
let v3=new Vehicle("Honda","Unicorn",127000);
let v4=new Vehicle("Yamaha","FZs",180000);
let v5=new Vehicle("Hero","Apache",160000);


v1.details();
v2.details();
v3.details();
v4.details();
v5.details();
console.log("-------------------Q2---------------");
class College{
    constructor(collegeName,hod, department){
        this.collegeName=collegeName;
        this.hod=hod;
        this.department=department;
        
    } 
    details(){
        console.log(`College details :College name:${this.collegeName} Department:${this.department} hod:${this.hod} `);
}
}
let c1=new College("ADCET,Ashta","Mrs.A.N.MUlla","CSE");
let c2=new College("ADCBP,Ashta","Mr,A.B.patil","B.pharm");
let c3=new College("WCE,Sangli","Mr.P.P.Deshmukh","Civil");
let c4=new College("KRP,Islampur","Mr.Y.B.Mali","Science");

c1.details();
c2.details();
c3.details();
c4.details();
console.log("------------------------Q3--------------------------------");*/

const mohitPerson = {
    fullname:"Sachin Tendulkar",
    age: 42,
    "isMarried": true
}
for (const key in mohitPerson){
    if(Object.hasOwnProperty.call(mohitPerson,key)){
        const element = mohitPerson(key);
        console.log(element);
        console.log();
    }
}