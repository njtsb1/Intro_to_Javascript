function fn() {
  return "Code here";
}

const arrowFn = () => "Code here";
const arrowFn2 = () => {
  // More than one expression
  return "Code here";
};

// Functions are also objects
fn.prop = "Can create properties";

console.log(fn());
console.log(fn.prop);

// Receive parameters
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receive and return functions
const controlFnExec = fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
};

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // Will execute the fn function
handleFnExecution(); // Will not execute fn function

/**
// controlFnExec as function
function controlFnExec(fnParam) {
  return function(allowed) {
    if (allowed) {
      fnParam();
    }
  };
}
 */
