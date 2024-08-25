"use strict";
(() => {
var exports = {};
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 7733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/episodes.js


function handler(req, res) {
    const { title  } = req.query;
    const titleDir = external_path_default().resolve(`./public/${title}`);
    if (!external_fs_default().existsSync(titleDir)) {
        res.status(404).json({
            message: "Title not found"
        });
        return;
    }
    const files = external_fs_default().readdirSync(titleDir);
    const episodes = files.filter((file)=>file.endsWith(".txt")).map((file)=>{
        const episodeName = file.replace(".txt", "");
        const filePath = external_path_default().join(titleDir, file);
        const embeddingCode = external_fs_default().readFileSync(filePath, "utf8").trim();
        return {
            episodeName,
            embeddingCode
        };
    });
    res.status(200).json(episodes);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7733));
module.exports = __webpack_exports__;

})();