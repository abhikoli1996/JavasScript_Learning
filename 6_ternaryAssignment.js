console.log("-----------Assignment 0A-----------");
console.log("=============Q1 ====================");

function maleMarriageEligibility(gender,age,boyName){
    var result= gender="Male" && age>=21
    ?`hey ${boyName} you are eligible for marriage`
    :`${boyName}, you are Not eligible for Marriage`;
    console.log(result);
}
maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("male",17,"Stew Jobs")

console.log("===========Q2 =======================");
function femaleMarriageEligibility( gender,age,girlName)
{
    
    if(gender=="Female" && age>=18)
    {
        return console.log(`hey ${girlName} you are eligible for marriage`);
        
    }
    return console.log(`${girlName} you are Not eligible for marriage`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");

