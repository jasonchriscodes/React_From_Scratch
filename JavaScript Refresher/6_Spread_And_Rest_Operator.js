// Spread Operator -------------------------------------
// Used to split up array elements OR object properties
const newArray = [...oldArray, 1, 2]; // add new element from oldArray to newArray and add (pull off) 1st and 2nd element
const newObject = { ...oldObject, newProp: 5 }; // add new element from oldObject to newObject and add (pull off) all the property of oldObject and add them as key value pairs if oldObject has new property it will be overriden by value of 5

// Example 1
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1, 2, 3, 4]

// if we do not include ... means that it has different element (included as one element inside the new element)
const numbers2 = [1, 2, 3];
const newNumbers2 = [numbers, 4];
console.log(newNumbers); // [[1, 2, 3], 4]

// distributing to newPerson
const person = {
  name: "Max",
};
const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);
// output
// [object Object] {
//   age: 28,
//   name: "Max"
// }

// Rest operator ------------------------------------------------------------------------
// Used to merge a list of function arguments into an array
function sortArgs(...args) {
  // sortArgs receives an unlimited amount of arguments and they can be merged together into an array and sort it using array method
  return args.sort();
}

// Example 2
const filter = (...args) => {
  return args.filter((el) => el === 1); // return true or false which filter expect if the element is equal to 1
};

console.log(filter(1, 2, 3));
