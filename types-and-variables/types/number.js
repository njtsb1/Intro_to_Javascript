const myNumber = 12.4032;

// Convert number to string
const numberAsString = myNumber.toString();
console.log("Number transformed into string: ", typeof numberAsString);

// Returns number with a number of decimal places
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNumber with two decimal places:", fixedTwoDecimals);

// Transform a string to float
console.log("\nString parsed to float: ", parseFloat("13.22"));

// Convert a string to int
console.log("\nString parsed to int:", parseInt("13.20"));
