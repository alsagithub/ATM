#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance =30000;
let myPin = 4321;

let pinAnswer =await inquirer.prompt([
    {
        name:"pin",
        message: "Enter you're pin number",
        type: "number",

},
]);

if(pinAnswer.pin === myPin){
    console.log("correct pin code!!!");
}
else{
    console.log("Invalid code!!");
};

let operations =await inquirer.prompt([
    {
        name:"operation",
        type: "list",
        message:"select the option",
        choices:["10000","15000","20000","25000","30000", "withdraw","check balance"],
    }
]);

if(operations.operation ==="10000"){
    let remainingAmount = (myBalance -= operations.operation);
    console.log("your remaining balance is" + myBalance);
}
 if(operations.operation === "15000"){
    let remainingAmount = (myBalance -= operations.operation);
    console.log("your remaining balance is:" + myBalance);
}
 if(operations.operation === "20000"){
    let remainingAmount =(myBalance -= operations.operation);
       console.log("your remaining balance is:" + myBalance);
    }
 if(operations.operation === "25000"){
    let remainingAmount = (myBalance -= operations.operation);
    console.log("your remaining balance is:" + myBalance);
}
 if(operations.operation === "30000"){
    let remainingAmount =(myBalance -= operations.operation);
    console.log("your remaining balance is:" + myBalance);
} 
 
if(operations.operation === "withdraw"){
 let answerAmount =await inquirer.prompt([
        {
            name:"amount",
            type:"number",
            message:"enter your amount",
        },
    ]);
let withdrawAmount = Number(answerAmount.amount);
if(withdrawAmount >= myBalance){
    console.log("your amount is sufficient")
}
else if(myBalance -= answerAmount.amount){
    console.log("your remaining balance is:" + myBalance)
}
};
if(operations.operation === "check balance"){
    console.log("your remaining number is:" + myBalance);
};


