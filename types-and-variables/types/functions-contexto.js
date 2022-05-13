(() => {
  this.name = "arrow function";

  const getNameArrowFn = () => this.name;

  function getName() {
    return this.name;
  }

  const user = {
    name: "Name in execution object",
    getNameArrowFn,
    getName
  };

  console.log(user.getNameArrowFn());
  console.log(user.getName());
})();
