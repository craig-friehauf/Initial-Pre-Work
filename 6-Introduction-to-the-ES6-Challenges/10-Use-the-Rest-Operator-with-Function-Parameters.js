// Varibale number of args "..." operator called the rest operator
// think its similar to "*" in python
// reduce function
// recude(function(total, nextValue) -> single item, inital value)
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
