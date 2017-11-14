"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_error_model_1 = require("./http-error.model");
var HttpResponse = (function (_super) {
    __extends(HttpResponse, _super);
    function HttpResponse(cd, erroNotificationType, msg, subcd) {
        if (msg === void 0) { msg = ""; }
        if (subcd === void 0) { subcd = ""; }
        return _super.call(this, cd, erroNotificationType, msg, subcd) || this;
    }
    return HttpResponse;
}(http_error_model_1.HttpError));
exports.HttpResponse = HttpResponse;
//# sourceMappingURL=http-response.model.js.map