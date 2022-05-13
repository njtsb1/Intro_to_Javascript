let user = {
  name: "Nivaldo"
};

// Changing an object's property
user.name = "Another name 1";
user["name"] = "Another name 2";

const prop = "name";
user[prop] = "Another name 3";

// function getProp(prop) {
//     return user[prop];
// }

// Creating a Property
user.lastName = "dos Santos Beirão";

// Deleting a Property
delete user.name;
