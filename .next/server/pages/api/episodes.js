"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/episodes";
exports.ids = ["pages/api/episodes"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/episodes.js":
/*!*******************************!*\
  !*** ./pages/api/episodes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    const { title  } = req.query;\n    const titleDir = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(`./public/${title}`);\n    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(titleDir)) {\n        res.status(404).json({\n            message: \"Title not found\"\n        });\n        return;\n    }\n    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(titleDir);\n    const episodes = files.filter((file)=>file.endsWith(\".txt\")).map((file)=>{\n        const episodeName = file.replace(\".txt\", \"\");\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(titleDir, file);\n        const embeddingCode = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\").trim();\n        return {\n            episodeName,\n            embeddingCode\n        };\n    });\n    res.status(200).json(episodes);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXBpc29kZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUVULFNBQVNFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdGLElBQUlHLEtBQUs7SUFDM0IsTUFBTUMsV0FBV04sbURBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRUksTUFBTSxDQUFDO0lBRWpELElBQUksQ0FBQ0wsb0RBQWEsQ0FBQ08sV0FBVztRQUMxQkgsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWtCO1FBQ2xEO0lBQ0osQ0FBQztJQUVELE1BQU1DLFFBQVFiLHFEQUFjLENBQUNPO0lBRTdCLE1BQU1RLFdBQVdGLE1BQ1pHLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsUUFBUSxDQUFDLFNBQzdCQyxHQUFHLENBQUNGLENBQUFBLE9BQVE7UUFDVCxNQUFNRyxjQUFjSCxLQUFLSSxPQUFPLENBQUMsUUFBUTtRQUN6QyxNQUFNQyxXQUFXckIsZ0RBQVMsQ0FBQ00sVUFBVVU7UUFDckMsTUFBTU8sZ0JBQWdCeEIsc0RBQWUsQ0FBQ3NCLFVBQVUsUUFBUUksSUFBSTtRQUU1RCxPQUFPO1lBQ0hOO1lBQ0FJO1FBQ0o7SUFDSjtJQUVKcEIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0k7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9lcGlzb2Rlcy5qcz8wZDgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgeyB0aXRsZSB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc3QgdGl0bGVEaXIgPSBwYXRoLnJlc29sdmUoYC4vcHVibGljLyR7dGl0bGV9YCk7XHJcblxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHRpdGxlRGlyKSkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1RpdGxlIG5vdCBmb3VuZCcgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmModGl0bGVEaXIpO1xyXG5cclxuICAgIGNvbnN0IGVwaXNvZGVzID0gZmlsZXNcclxuICAgICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLnR4dCcpKVxyXG4gICAgICAgIC5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVwaXNvZGVOYW1lID0gZmlsZS5yZXBsYWNlKCcudHh0JywgJycpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbih0aXRsZURpciwgZmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYmVkZGluZ0NvZGUgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4JykudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVwaXNvZGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1iZWRkaW5nQ29kZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihlcGlzb2Rlcyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0aXRsZSIsInF1ZXJ5IiwidGl0bGVEaXIiLCJyZXNvbHZlIiwiZXhpc3RzU3luYyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImVwaXNvZGVzIiwiZmlsdGVyIiwiZmlsZSIsImVuZHNXaXRoIiwibWFwIiwiZXBpc29kZU5hbWUiLCJyZXBsYWNlIiwiZmlsZVBhdGgiLCJqb2luIiwiZW1iZWRkaW5nQ29kZSIsInJlYWRGaWxlU3luYyIsInRyaW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/episodes.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/episodes.js"));
module.exports = __webpack_exports__;

})();