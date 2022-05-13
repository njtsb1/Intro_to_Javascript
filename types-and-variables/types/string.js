// Returns the length of a string
const textSize = "Text".length;
console.log(`Number of letters: ${textSize}`);

// Returns an array by breaking the string by a delimiter
const splittedText = "Text".split("x");
console.log(
  "\nArray with positions separated by the delimiter: ",
  splittedText
);

// Search for one value and replace with another
const replacedText = "Text".replace("Text", "txeT");
console.log("\nValue Replacement:", replacedText);

// Returns the "slice" of a value
const lastChar = "Text".slice(-1);
console.log("\nLast letter of a string:", lastChar);

const allWithoutLastChar = "Text".slice(0, -1);
console.log(
  "\nString value of the first letter minus the last:",
  allWithoutLastChar
);

const secondToEnd = "Text".slice(1);
console.log("\nString value from second letter to last:", secondToEnd);

// Returns N characters from a position
const twoCharsBeforeFirstPos = "Text".substr(0, 2);
console.log("\nThe first two letters are:", twoCharsBeforeFirstPos);
