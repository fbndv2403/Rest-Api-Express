"use strict";

var _app = _interopRequireDefault(require("./models/app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(8080, () => {
  console.log("server on port 8080");
});