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

/***/ "./js/main.ts"
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
() {

eval("{\nfunction teachClass(todayClass) {\n    if (todayClass === \"Math\") {\n        return \"Teaching Math\";\n    }\n    else {\n        return \"Teaching History\";\n    }\n}\n// Director sinfi\nclass Director {\n    workFromHome() {\n        return 'Working from home';\n    }\n    getCoffeeBreak() {\n        return 'Getting a coffee break';\n    }\n    workDirectorTasks() {\n        return 'Getting to director tasks';\n    }\n}\n// Teacher sinfi\nclass Teacher {\n    workFromHome() {\n        return 'Cannot work from home';\n    }\n    getCoffeeBreak() {\n        return 'Cannot have a break';\n    }\n    workTeacherTasks() {\n        return 'Getting to work';\n    }\n}\n// createEmployee funksiyası\nfunction createEmployee(salary) {\n    if (salary < 500)\n        return new Teacher();\n    return new Director();\n}\n// isDirector tip yoxlayıcı funksiyası\nfunction isDirector(employee) {\n    return employee.workDirectorTasks !== undefined;\n}\n// executeWork funksiyası\nfunction executeWork(employee) {\n    if (isDirector(employee)) {\n        console.log(employee.workDirectorTasks());\n    }\n    else {\n        console.log(employee.workTeacherTasks());\n    }\n}\n// Test\nexecuteWork(createEmployee(200)); // Expected: \"Getting to work\"\nexecuteWork(createEmployee(1000)); // Expected: \"Getting to director tasks\"\nconsole.log(teachClass(\"Math\")); // Expected output: Teaching Math\nconsole.log(teachClass(\"History\")); // Expected output: Teaching History\n\n\n//# sourceURL=webpack://task_2/./js/main.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;