// Normal Function
function myFirst() {
  console.log("This is my first");
}
function mySecond() {
  console.log("This is my second");
}

myFirst();
mySecond();

// Sequence Control : Method 1
// The problem with this example is that you have to call two functions to display the result.
function myDisplay(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = 0;
  sum = num1 + num2;
  return sum;
}
const result = myCalculator(2, 4);
myDisplay(result);

// Sequence Control : Method 2
// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

function myCalculator(num1, num2) {
  let sum = 0;
  sum = num1 + num2;
  myDisplay(sum);
}
myCalculator(2, 5);

// CallBack Method to control sequence
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalc(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalc(5, 5, myDisplayer);
