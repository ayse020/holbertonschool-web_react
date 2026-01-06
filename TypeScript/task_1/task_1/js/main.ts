// ==================== Task 3: printTeacher ====================
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));  // J. Doe
console.log(printTeacher("Jane", "Smith")); // J. Smith

// ==================== Task 4: StudentClass ====================
// Constructor interfeysi
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Class interfeysi
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementasiyası
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
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

// Test
const student = new StudentClass({ firstName: "Alice", lastName: "Smith" });
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName());    // Alice

