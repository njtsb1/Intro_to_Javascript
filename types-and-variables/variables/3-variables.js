const name = "Nivaldo";

// We cannot change the value
// name = "Nivaldo";

const user = {
  name: "Nivaldo"
};

// But if it's an object, we can change its properties
user.name = "Another name";

// We can't make the object "point" elsewhere
//user = {
// name: "Nivaldo"
//};

const people = ["Nivaldo", "José", "Tadeu"];

// We can add new items
people.push("John");

// We can remove some item
people.shift();

// We can change directly
people[1] = "James";

console.log("\nArray afterchanges: ", people);