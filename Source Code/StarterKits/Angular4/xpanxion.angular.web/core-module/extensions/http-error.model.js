"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErroNotificationType;
(function (ErroNotificationType) {
    ErroNotificationType[ErroNotificationType["Dialog"] = 0] = "Dialog";
    ErroNotificationType[ErroNotificationType["Toaster"] = 1] = "Toaster";
    ErroNotificationType[ErroNotificationType["Swallow"] = 2] = "Swallow";
})(ErroNotificationType = exports.ErroNotificationType || (exports.ErroNotificationType = {}));
var ToastrMessageType;
(function (ToastrMessageType) {
    ToastrMessageType[ToastrMessageType["Error"] = "Error"] = "Error";
    ToastrMessageType[ToastrMessageType["Warning"] = "Warning"] = "Warning";
    ToastrMessageType[ToastrMessageType["Information"] = "Information"] = "Information";
    ToastrMessageType[ToastrMessageType["Success"] = "Success"] = "Success";
    ToastrMessageType[ToastrMessageType["Custom"] = "Custom"] = "Custom";
})(ToastrMessageType = exports.ToastrMessageType || (exports.ToastrMessageType = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["Swallow"] = "None"] = "Swallow";
    ErrorCode[ErrorCode["Fatal"] = "Fatal"] = "Fatal";
    ErrorCode[ErrorCode["BR001"] = "BR001"] = "BR001";
    ErrorCode[ErrorCode["BR002"] = "BR002"] = "BR002";
    ErrorCode[ErrorCode["AuthFailedInvalidAuthResponse"] = "AuthFailedInvalidAuthResponse"] = "AuthFailedInvalidAuthResponse";
    ErrorCode[ErrorCode["UserSessionExpired"] = "UserSessionExpired"] = "UserSessionExpired";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ToastrCode;
(function (ToastrCode) {
    ToastrCode[ToastrCode["EmptyEmailAddress"] = "EmptyEmailAddress"] = "EmptyEmailAddress";
    ToastrCode[ToastrCode["EmptyPassword"] = "EmptyPassword"] = "EmptyPassword";
})(ToastrCode = exports.ToastrCode || (exports.ToastrCode = {}));
var HttpError = (function () {
    function HttpError(cd, notificationType, err, messageParams) {
        if (err === void 0) { err = null; }
        if (messageParams === void 0) { messageParams = null; }
        this.code = cd;
        this.error = err;
        this.erroNotificationType = notificationType;
        this.messageParams = messageParams;
    }
    return HttpError;
}());
exports.HttpError = HttpError;
var ToastrMessage = (function () {
    function ToastrMessage() {
    }
    return ToastrMessage;
}());
exports.ToastrMessage = ToastrMessage;
//# sourceMappingURL=http-error.model.js.map