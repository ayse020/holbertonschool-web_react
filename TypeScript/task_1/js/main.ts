// Task 2: Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // additional property for directors
}

// Example director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17
};

console.log(director1);

