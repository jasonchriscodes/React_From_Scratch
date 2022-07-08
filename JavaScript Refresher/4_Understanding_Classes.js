// class
class Person {
  name = "Max"; // property
  call = () => {}; // method
}

// instantiate of class
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

// example 1
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Max";
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
