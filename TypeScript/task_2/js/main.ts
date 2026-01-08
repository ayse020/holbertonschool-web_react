type Subjects = "Math" | "History";function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}

// Director sinfi
class Director {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

// Teacher sinfi
class Teacher {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}

// createEmployee funksiyası
function createEmployee(salary: number) {
    if (salary < 500) return new Teacher();
    return new Director();
}

// isDirector tip yoxlayıcı funksiyası
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork funksiyası
function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Test
executeWork(createEmployee(200));   // Expected: "Getting to work"
executeWork(createEmployee(1000));  // Expected: "Getting to director tasks"
console.log(teachClass("Math"));      // Expected output: Teaching Math
console.log(teachClass("History"));   // Expected output: Teaching History
