const user = {
  name: "Nivaldo",
  lastName: "dos Santos Beirão"
};

// Retrieve object keys
console.log("User object properties:", Object.keys(user));

// Returns an array of array containing [ property_name, property_value ]
console.log("\nList of properties and values:", Object.entries(user));

// Merge object properties
Object.assign(user, { fullName: "Nivaldo dos Santos Beirão" });

console.log("\nAdd the fullName property on the user object", user);
console.log(
  "\nReturns a new object by merging two or more objects",
  Object.assign({}, user, { age: 31 })
);

// Prevent all changes to an object
const newObj = { foo: "pub" };
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("\nNew Obj variable after changes:", newObj);

// Only allows changing existing properties on an object
const person = { name: "Nivaldo" };
Object.seal(person);

person.name = "Nivaldo dos Santos";
delete person.name;
person.age = 26;

console.log("\nPerson variable after changes:", person);
