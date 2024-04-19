#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 78900;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select an option",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount",
            }
        ]);
        // myBalance -= amountAnswer.amount;
        // console.log(`your remaining balance is: ${myBalance}`);
        if (myBalance < amountAnswer.amount) {
            console.log("OOPS! sorry looks like you have insufficient amount,you can't withdraw!");
        }
        else if (myBalance -= amountAnswer.amount) {
            console.log(` you successfully done your withdrawl \n your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "please select an amount How much you want to withdraw",
                choices: ["1000", "3000", "5000", "10000"],
            }
        ]);
        myBalance -= fastCashAns.fastcash;
        console.log(` you have successfully done fast cash withdrawl ${fastCashAns.fastcash},\n your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code!");
}
