const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols are unique
console.log("symbol1 is equal to symbol2", symbol1 === symbol2);

// Prevent conflict between property names
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
  [nameSymbol1]: "Nivaldo",
  [nameSymbol2]: "Another name",
  lastName: "dos Santos Beirão"
};

console.log(user);

// Symbols create non-enumerable properties
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nKey Value ${key}: ${user[key]}`);
  }
}

console.log("Object user properties:", Object.keys(user));
console.log("Values ​​of user properties object:", Object.values(user));

// Display symbols of an object
console.log(
  "Symbols registered in the user object:",
  Object.getOwnPropertySymbols(user)
);

// Accessing all object properties
console.log("All object user properties:", Reflect.ownKeys(user));

// Create an enum
const directions = {
  UP: Symbol("UP"),
  DOWN: Symbol("DOWN"),
  LEFT: Symbol("LEFT"),
  RIGHT: Symbol("RIGHT")
};
