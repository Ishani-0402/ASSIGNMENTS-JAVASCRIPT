class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Create instances of the Person class
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  // Display their information
  person1.displayInfo(); // Output: Name: Alice, Age: 25
  person2.displayInfo(); // Output: Name: Bob, Age: 30
  