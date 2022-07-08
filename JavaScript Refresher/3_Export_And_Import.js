// person.js
const person = {
  name: "Max",
};
export default person;

// utility.js
export const clean = () => {};
export const baseData = 10;

// app.js

// using default export
// import person from "./person.js";
import prs from "./person.js"; // can be named

// using named export
import { baseData } from "./utility.js"; //  need to use the exact name
import { clean } from "./utility.js";

// or

import * as bundled from "./utility.js"; // import all constant as properties
