// Step 1: interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Step 2: function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Step 3: test the function
console.log(printTeacher("John", "Doe"));    // Expected output: "J. Doe"
console.log(printTeacher("Jane", "Smith"));  // Expected output: "J. Smith"

