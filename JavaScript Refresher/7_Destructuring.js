// Destructuring
// Easily extract array elements or obeject properties and store them in variables
// different from spread which takes out all elements all property and distributes them in new array or object.
// while destructuring allow to pull out single elements or properties and store them in variables for arrays

// Array Destructuring
[a, b] = ["Hello", "Max"];
console.log(a); // Hello
console.log(b); // Max

// Object Destructuring
// {name} = {name:'Max', age: 28}
// console.log(nama) // Max
// console.log(age) // undefined

// Example 1
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); // 1 2

// Example 2
const numbers2 = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); // 1 3
