// Interface for the StudentClass
interface StudentInterface {
  firstName: string;
  lastName: string;
}

// Class implementation
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test examples
const student1 = new StudentClass("Alice", "Johnson");
const student2 = new StudentClass("Bob", "Smith");

console.log(student1.displayName()); // Alice
console.log(student1.workOnHomework()); // Currently working
console.log(student2.displayName()); // Bob
console.log(student2.workOnHomework()); // Currently working
