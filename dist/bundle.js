/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./TypeScript/js/main.ts"
/*!*******************************!*\
  !*** ./TypeScript/js/main.ts ***!
  \*******************************/
() {

eval("{\n// Class implementation\nvar StudentClass = /** @class */ (function () {\n    function StudentClass(firstName, lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n    StudentClass.prototype.workOnHomework = function () {\n        return \"Currently working\";\n    };\n    StudentClass.prototype.displayName = function () {\n        return this.firstName;\n    };\n    return StudentClass;\n}());\n// Test examples\nvar student1 = new StudentClass(\"Alice\", \"Johnson\");\nvar student2 = new StudentClass(\"Bob\", \"Smith\");\nconsole.log(student1.displayName()); // Alice\nconsole.log(student1.workOnHomework()); // Currently working\nconsole.log(student2.displayName()); // Bob\nconsole.log(student2.workOnHomework()); // Currently working\n\n\n//# sourceURL=webpack://holbertonschool-web_react/./TypeScript/js/main.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./TypeScript/js/main.ts"]();
/******/ 	
/******/ })()
;