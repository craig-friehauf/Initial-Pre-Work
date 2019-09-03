// function that don't return a reference to something returns
// a reference to undefined
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();
