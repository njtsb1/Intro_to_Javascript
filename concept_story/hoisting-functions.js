function fn() {
  log("Function Hoisting");

  function log(value) {
    console.log(value);
  }
}

fn();

/**
function fn() {
    function log(value) {
        console.log(value);
    }

    log('Function Hoisting');
}
 */
