var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe")); // J. Doe
console.log(printTeacher("Jane", "Smith")); // J. Smith
// Class implementasiyası
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Test
var student = new StudentClass({ firstName: "Alice", lastName: "Smith" });
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName()); // Alice
