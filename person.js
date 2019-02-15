class Person  {

  constructor(name, age) {
    this.age = age;
    this.name = name;

  };
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
