// Task 3: Print Teacher function

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test the function
console.log(printTeacher("John", "Doe")); // Çıxış: J. Doe
console.log(printTeacher("Jane", "Smith")); // Çıxış: J. Smith

