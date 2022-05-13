const users = ["Nivaldo", "José", "Tadeu"];

const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("W")
};

const persons = [
  {
    name: "Nivaldo",
    age: 31,
    gender: gender.MAN
  },
  {
    name: "José",
    age: 31,
    gender: gender.MAN
  },
  {
    name: "Tadeu",
    age: 31,
    gender: gender.MAN
  }
];

// Return the number of items in an array
console.log("Items: ", persons.length);

// Check if it's an array
console.log("The variable persons is an array:", Array.isArray(persons));

// Iterate through array items
persons.forEach(person => {
  console.log(`Name: ${person.name}`);
});

// Filter array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log("\nNew list with men only:", mens);

// Return a new
const personsWithCourse = persons.map(person => {
  person.course = "Introduction to Javascript";
  return person;
});

console.log("\nPeople with the addition of the course:", personsWithCourse);

// Transform an array into another type
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log("\nSum of people's age", totalAge);

// Joining operations
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
console.log(
  "\nSum of ages of people who are even-aged",
  totalEvenAges
);
