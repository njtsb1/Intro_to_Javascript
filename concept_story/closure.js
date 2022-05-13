(() => {
  const exemple = "This variable";

  const function1 = () => {
    console.log(`Will be remembered here: ${exemple}`);

    return () => {
      console.log(`Also here: ${exemple}`);

      return () => {
        console.log(`I believe we already understand what Closing is: ${exemple}`);
      };
    };
  };

  function1()()();
})();
