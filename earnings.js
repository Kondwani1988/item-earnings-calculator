// Step 1: Create an object to store item names and their earnings
const earnings = {
    "Bubblegum": 202,
    "Toffee": 118,
    "Ice cream": 2250,
    "Milk chocolate": 1680,
    "Doughnut": 1075,
    "Pancake": 80
};

// Step 2: Print the earned amounts
console.log("Earned amount:");
for (let item in earnings) {
    console.log(`${item}: $${earnings[item]}`);
}

// Step 3: Calculate the total income
let totalIncome = 0;
for (let amount in earnings) {
    totalIncome += earnings[amount];
}

// Step 4: Print the total income
console.log(`\nIncome: $${totalIncome}.0`);
const input =  require('sync-input');
let staffexpenses = Number(input("Staff expenses:"));
let otherexpenses = Number(input("Other expenses:"));
let income = totalIncome - (staffexpenses + otherexpenses);
console.log(`Net income: $${income}`);
