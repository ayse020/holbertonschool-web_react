// main.ts
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, _brand: "Major" };
}
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits, _brand: "Minor" };
}
// Test
var major1 = { credits: 3, _brand: "Major" };
var major2 = { credits: 2, _brand: "Major" };
console.log(sumMajorCredits(major1, major2)); // { credits: 5, _brand: "Major" }
var minor1 = { credits: 1, _brand: "Minor" };
var minor2 = { credits: 2, _brand: "Minor" };
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, _brand: "Minor" }
