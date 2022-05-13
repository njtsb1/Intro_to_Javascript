var test = "example";

(() => {
  console.log(`Value inside the function "${test}"`);

  if (true) {
    var test = "example";
    console.log(`Value inside the if "${test}"`);
  }

  console.log(`Value after execution of if "${test}"`);
})();
