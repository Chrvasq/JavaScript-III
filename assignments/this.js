/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding - This is the default binding of `this`. In this setting, this would refer to the window in a browser or global/console in node.
 * 2. Implicit Binding - The object preceding the dot notation is what `this` will be bound to.
 * 3. Explicit Binding - Forces a function call to use a particular object for `this` binding. This is done by using functions such as call, apply, and bind. Call and apply both pass the object in as a argument in slightly different ways. Apply passes the object in and any arguments in as an array. Bind creates a copy of the function as a new function and sets `this` to the object passed in as an argument.
 * 4. New Binding - This binding occurs when calling the function with the `new` operator. This creates a new empty object that inherits the protype of the function. Properties and methods are added to the object referenced by `this` and the newly created object referenced by `this` is returned implicitly unless another object is returned explicitly.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
const myFunction = function() {
  console.log(this);
};

myFunction();

// Principle 2

// code example for Implicit Binding
const chris = {
  name: "Chris",
  greet: function(person) {
    console.log(`Hi ${person}, my name is ${this.name}.`);
  }
};

chris.greet("Matt"); // Hi Matt, my name is Chris.

// Principle 3

// code example for Explicit Binding
function greet() {
    console.log(this.name);
}

const person = {
    name: "Alex",
}

greet.call(person); // Alex

// Principle 4

// code example for New Binding
function Person(str) {
    this.name = str;
    this.say = function() {
        return `I am ${this.name}`;
    };
};

const name = "Chris";
const result = new Person(name);

console.log(result.name); // Chris
