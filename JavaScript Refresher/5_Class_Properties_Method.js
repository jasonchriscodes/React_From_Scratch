// Properties are like "variable attached to classes/objects"
class Human {
  constructor() {
    this.myProperty = "value";
  }
}

// OR

class Human {
  myProperty = "value;";
}

// Method are like 'functions' atteched to classes/objects
class Human {
  constructor() {
    this.myProperty = "value";
  }
  myMethod() {
    console.log(this.myProperty);
  }
}

// OR

// The advantages of this syntax is used an arrow function as propery value,
// we got no problem with 'this' key words
class Human {
  constructor() {
    this.myProperty = "value";
  }
  myMethod = () => {
    console.log(this.myProperty);
  };
}

// Example
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
