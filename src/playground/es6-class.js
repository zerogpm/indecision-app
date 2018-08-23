class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }

  getDescription() {
    return `hello  ${this.name} your age is ${this.age}`;
  }

  getGreeting() {
    return `hello  ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getGreeting();
    if (this.hasMajor()) {
      description += ` you major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age, location);
    this.location = location;
  }

  hasLocation() {
    return !!this.location;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasLocation()) {
      greeting += ` live in ${this.location}`;
    }
    return greeting;
  }
}

const me = new Student('Chris', 26, 'computer ddsss');

const optpathTraveler = new Traveler('Chris', 11, 'Vancouver');

console.log(optpathTraveler.getGreeting());