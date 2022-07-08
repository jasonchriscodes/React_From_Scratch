// run in jsbin.com
function printMyName(name) {
  console.log(name);
}
// printMyName(); // undefined
printMyName("Max"); // Max

// alternative
const printMyName = (name) => {
  console.log(name);
};
printMyName("Max"); // Max

// alternative, for one argument
const printMyName = (name) => {
  console.log(name);
};
printMyName("Max"); // Max

// function with no argument, invalid syntax
// const printMyName = => {
//   console.log("Max");
// };
// printMyName(); // Max

// function with no argument
const printMyName = () => {
  console.log("Max");
};
printMyName(); // Max

// function with more than 1 argument must use parenthese
const printMyName = (name, age) => {
  console.log(name, age);
};
printMyName("Max", 28); // Max

// multiplication
const multiply = (number) => {
  return number * 2;
};
console.log(multiply(2));

// alternative multiplication
const multiply2 = (number) => number * 2;
console.log(multiply(2));
