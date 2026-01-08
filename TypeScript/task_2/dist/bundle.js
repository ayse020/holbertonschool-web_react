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

eval("{\nclass Director {\n    workFromHome() {\n        return \"Working from home\";\n    }\n    getCoffeeBreak() {\n        return \"Getting a coffee break\";\n    }\n    workDirectorTasks() {\n        return \"Getting to director tasks\";\n    }\n}\nclass Teacher {\n    workFromHome() {\n        return \"Cannot work from home\";\n    }\n    getCoffeeBreak() {\n        return \"Cannot have a break\";\n    }\n    workTeacherTasks() {\n        return \"Getting to work\";\n    }\n}\nfunction createEmployee(salary) {\n    if (typeof salary === \"number\" && salary < 500) {\n        return new Teacher();\n    }\n    else if (typeof salary === \"string\" && salary.startsWith(\"$\")) {\n        return new Director();\n    }\n    else if (typeof salary === \"number\" && salary >= 500) {\n        return new Director();\n    }\n    else {\n        return new Teacher();\n    }\n}\n// Test\nconsole.log(createEmployee(200).constructor.name); // Teacher\nconsole.log(createEmployee(1000).constructor.name); // Director\nconsole.log(createEmployee(\"$500\").constructor.name); // Director\n\n\n//# sourceURL=webpack://task_2/./js/main.ts?\n}");

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