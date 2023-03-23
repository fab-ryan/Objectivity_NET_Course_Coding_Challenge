"use strict";
const accounts = [];
function createAccount(name) {
    const account = { name, balance: 0 };
    accounts.push(account);
    console.log(`Account created for ${name}.`);
}
function getAccount(name) {
    return accounts.find((account) => account.name === name);
}
function deposit(name, amount) {
    const account = getAccount(name);
    if (account) {
        account.balance += amount;
        console.log(`$${amount} deposited into ${name}'s account.`);
        console.log(`${name}'s balance is now $${account.balance}.`);
    }
    else {
        console.log(`Account not found for ${name}.`);
    }
}
function withdraw(name, amount) {
    const account = getAccount(name);
    if (account) {
        if (account.balance < amount) {
            console.log(`Insufficient funds. ${name}'s balance is $${account.balance}.`);
        }
        else {
            account.balance -= amount;
            console.log(`$${amount} withdrawn from ${name}'s account.`);
            console.log(`${name}'s balance is now $${account.balance}.`);
        }
    }
    else {
        console.log(`Account not found for ${name}.`);
    }
}
function viewBalance(name) {
    const account = getAccount(name);
    if (account) {
        console.log(`${name}'s balance is $${account.balance}.`);
    }
    else {
        console.log(`Account not found for ${name}.`);
    }
}
// Example usage
createAccount("Fabrice");
deposit("Fabrice", 1000);
withdraw("Fabrice", 500);
viewBalance("Fabrice");
withdraw("Fabrice", 2000);
