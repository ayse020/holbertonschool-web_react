// Task 5 & 6: Director and Teacher

// DirectorInterface və TeacherInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director sinfi
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher sinfi
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee funksiyası
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// isDirector funksiyası
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork funksiyası
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Task 7: String Literal Types

// Subjects tipini yarat
type Subjects = "Math" | "History";

// teachClass funksiyası
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  return "Unknown subject"; // təhlükəsizlik üçündür
}

// Test hissəsi
console.log(createEmployee(200));       // Teacher {}
console.log(createEmployee(1000));      // Director {}
console.log(createEmployee("$500"));    // Director {}

executeWork(createEmployee(200));       // Getting to work
executeWork(createEmployee(1000));      // Getting to director tasks
executeWork(createEmployee("$500"));    // Getting to director tasks

console.log(teachClass("Math"));        // Teaching Math
console.log(teachClass("History"));     // Teaching History

