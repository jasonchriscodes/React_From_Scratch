// Primitive types
// (bool, number, string) whenever reassign or store variable in another variable, it will copy the value;
const number = 1;
const num2 = number;
console.log(num2); // 1

// Reference types
// object and arrays are reference types
// it will print the same value as the first person but it will not actually have copied the person
// instead person the object is stored in memory and in the constant person we store a pointer to that place in memory.
// And if we then assign person to secondPerson that pointer will be copied
// this is the case if we change person.name after having it copied.
const person2 = {
  name: "Max",
};
const secondPerson2 = person;
person.name = "Manu";
console.log(secondPerson); // Manu
// Why?
// the reason for it is that it just copied the pointer and pointes to the exact same object memory as
// person does so if we change name on person we automatically change it for secondPerson
// This is important because it can lead to unexpected behaviors. if you copy objects or arrays like this because then may manipulate one object in one place in the app and accidentally manipulate another usage of the same object in another place of the app
// Therefore we learn copy this is an immutable way (really copy the object not just pointer by using spread operator)

// Solution
const person = {
  name: "Max",
};
const secondPerson = {
  ...person,
};
person.name = "Manu";
console.log(secondPerson); // Max, still printing Max instead of Manu
