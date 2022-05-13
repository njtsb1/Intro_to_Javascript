(() => {
  const getName = () => {
    return "Nivaldo dos Santos Beirão";
  };

  const log = value => {
    console.log(value);
  };

  const main = fn => {
    return () => log(fn());
  };

  const logName = main(getName);

  logName();
})();
