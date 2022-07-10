// Array Function
const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => { // num is argument (can be named anything)
  return num * 2;
});
console.log(numbers); // [1,2,3]
console.log(doubleNumArray); // [2,4,6]
