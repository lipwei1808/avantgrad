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
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./pages/api/mail.tsx":
/*!****************************!*\
  !*** ./pages/api/mail.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst sgMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\nasync function handler(req, res) {\n    console.log(process.env.SENDGRID_KEY);\n    sgMail.setApiKey(process.env.SENDGRID_KEY);\n    const body = req.body;\n    const data = JSON.parse(body);\n    console.log(data);\n    const msg = {\n        to: \"tlipwei@gmail.com\",\n        from: \"avantgraddd@gmail.com\",\n        subject: \"Sending with SendGrid is Fun\",\n        text: \"New Order\",\n        html: `<div><div>Name: ${data.name}</div><div>Email: ${data.email}</div><div>Number: ${data.number}</div><div>Item: ${data.item}</div><div>Qty: ${data.qty}</div></div>`\n    };\n    try {\n        const result = await sgMail.send(msg);\n        console.log(result);\n        res.status(200).json({\n            message: \"success\"\n        });\n    } catch (e) {\n        console.log(e);\n        res.status(500).json({\n            message: \"Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFNBQVNDLG1CQUFPQSxDQUFDLHNDQUFnQjtBQUV4QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0MsUUFBUUMsR0FBRyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7SUFDcENULE9BQU9VLFNBQVMsQ0FBQ0gsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0lBQ3pDLE1BQU1FLE9BQU9SLElBQUlRLElBQUk7SUFDckIsTUFBTUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSDtJQUN4Qk4sUUFBUUMsR0FBRyxDQUFDTTtJQUNaLE1BQU1HLE1BQU07UUFDVkMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUVSLEtBQUtTLElBQUksQ0FBQyxrQkFBa0IsRUFBRVQsS0FBS1UsS0FBSyxDQUFDLG1CQUFtQixFQUFFVixLQUFLVyxNQUFNLENBQUMsaUJBQWlCLEVBQUVYLEtBQUtZLElBQUksQ0FBQyxnQkFBZ0IsRUFBRVosS0FBS2EsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUMxSztJQUNBLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU0xQixPQUFPMkIsSUFBSSxDQUFDWjtRQUNqQ1YsUUFBUUMsR0FBRyxDQUFDb0I7UUFDWnRCLElBQUl3QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBVTtJQUM1QyxFQUFFLE9BQU9DLEdBQUc7UUFDVjFCLFFBQVFDLEdBQUcsQ0FBQ3lCO1FBQ1ozQixJQUFJd0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQVE7SUFDMUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXZhbnRncmFkLy4vcGFnZXMvYXBpL21haWwudHN4P2IyMjIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2dNYWlsID0gcmVxdWlyZShcIkBzZW5kZ3JpZC9tYWlsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LlNFTkRHUklEX0tFWSk7XG4gIHNnTWFpbC5zZXRBcGlLZXkocHJvY2Vzcy5lbnYuU0VOREdSSURfS0VZKTtcbiAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IG1zZyA9IHtcbiAgICB0bzogXCJ0bGlwd2VpQGdtYWlsLmNvbVwiLCAvLyBDaGFuZ2UgdG8geW91ciByZWNpcGllbnRcbiAgICBmcm9tOiBcImF2YW50Z3JhZGRkQGdtYWlsLmNvbVwiLCAvLyBDaGFuZ2UgdG8geW91ciB2ZXJpZmllZCBzZW5kZXJcbiAgICBzdWJqZWN0OiBcIlNlbmRpbmcgd2l0aCBTZW5kR3JpZCBpcyBGdW5cIixcbiAgICB0ZXh0OiBcIk5ldyBPcmRlclwiLFxuICAgIGh0bWw6IGA8ZGl2PjxkaXY+TmFtZTogJHtkYXRhLm5hbWV9PC9kaXY+PGRpdj5FbWFpbDogJHtkYXRhLmVtYWlsfTwvZGl2PjxkaXY+TnVtYmVyOiAke2RhdGEubnVtYmVyfTwvZGl2PjxkaXY+SXRlbTogJHtkYXRhLml0ZW19PC9kaXY+PGRpdj5RdHk6ICR7ZGF0YS5xdHl9PC9kaXY+PC9kaXY+YCxcbiAgfTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZ01haWwuc2VuZChtc2cpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJFcnJvclwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsic2dNYWlsIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIlNFTkRHUklEX0tFWSIsInNldEFwaUtleSIsImJvZHkiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibXNnIiwidG8iLCJmcm9tIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwibmFtZSIsImVtYWlsIiwibnVtYmVyIiwiaXRlbSIsInF0eSIsInJlc3VsdCIsInNlbmQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail.tsx"));
module.exports = __webpack_exports__;

})();