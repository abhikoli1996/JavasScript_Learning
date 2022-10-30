console.log("--------------------Assignment No-A-----------------------------------");
console.log("----------------------------Q1-------------------------------------");
let bank_sbi = {
    bankName: "SBI",
    branch: "Sangli",
    account: 20000,
    headquarter: "Mumbai"
}
console.log(bank_sbi);
console.log("----------------------------Q2--------------------------------------");
let bank_location = {
    street: "Ganpati peth",
    city: "sangli",
    pin_code: "416416"
}
console.log(bank_location);
console.log("---------------------------Q3----------------------------------------");
console.log(`---------------Clone Objects by Using "Object.assign()"--------------`);

let cloned_bank_sbi = Object.assign({}, bank_sbi);
console.log(`Bank Name:- "${cloned_bank_sbi.bankName}", Branch:- "${cloned_bank_sbi.branch}", Accounts:- "${cloned_bank_sbi.account}", headquarter-> "${cloned_bank_sbi.headquarter}"`);

let sbi_bank = Object.assign({}, bank_location);
console.log(`Street:- "${sbi_bank.street}", City:- "${sbi_bank.city}", Pin_code:- "${sbi_bank.pin_code}"`);

console.log(`---------------Clone Objects by Using "Spread Operator"--------------`);

let clone_bank_sbi = { ...bank_sbi };
console.log(`Bank Name:- "${clone_bank_sbi.bankName}", Branch:- "${clone_bank_sbi.branch}", Accounts:- "${clone_bank_sbi.account}", headquarter-> "${clone_bank_sbi.headquarter}"`);

let locationClone = { ...bank_location };
console.log(`Street:- "${locationClone.street}", City:- "${locationClone.city}", Pin_code:- "${locationClone.pin_code}"`);

console.log("------------------------Q4----------------------------------------");
let rate_of_interest = {
    home_loan_interest: "12%",
    personal_loan_interest: "11%",
    due_interest: "8%"
}
console.log(rate_of_interest);
console.log("---------------------------Q5----------------------------------------");
let sbi_details = Object.assign(bank_sbi, bank_location, rate_of_interest);
console.log(`Merged All Object in New Object->`);
console.table(sbi_details);

console.log("---------------------------Q6----------------------------------------------");
console.log(`"Traverse the Merged Object"`);
for (const key in sbi_details) {
    const element = sbi_details[key];
    console.log(`${key} :${element}`);
}