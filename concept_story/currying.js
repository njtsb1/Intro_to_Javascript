(() => {
  /**
    const sum = (a, b) => a + b;

    sum(2, 2);
    sum(2, 3);
    sum(2, 4);
    sum(2, 5);
     */

  const sum = a => b => a + b;
  const sum2 = sum(2);

  sum2(2);
  sum2(3);
  sum2(4);
  sum2(5);
})();
