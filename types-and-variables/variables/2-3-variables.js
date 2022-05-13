(() => {
  const test = "function value";

  console.log(`Value inside the function "${test}"`);

  if (true) {
    const test = "value if";
    console.log(`Value inside the if "${test}"`);
  }

  if (true) {
    const test = "value of another if";
    console.log(`Value of another if "${test}"`);
  }

  console.log(`Value after execution of if "${test}"`);
})();
