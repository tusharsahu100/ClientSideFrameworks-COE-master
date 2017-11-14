"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration_settings_1 = require("./configuration-settings");
var environment_1 = require("../../environment");
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
Constants.regExType = {
    numeric: /^\d+$/,
    alphanumeric: /^[a-zA-Z0-9]*$/,
    alphanumericWithSpace: /^[a-zA-Z0-9 ]*$/,
    alphanumWithSpecial1: /^[a-zA-Z0-9!"'#$%&( )*+,./:;=?@^_-]*$/,
    decimalPrecisionFour: /^([0-9]*([.]{1}[0-9]{0,4})?)$/,
    decimalPrecisionTwo: /^([0-9]*([.]{1}[0-9]{0,2})?)$/,
    negativedecimalPrecisionFour: /^(-?[0-9]*([.]{1}[0-9]{0,4})?)$/,
    alph1anum1: '^.*(?=.{7,})(?=.*[0-9])(?=.*[a-zA-Z]).*$',
    phoneKey: /^[a-zA-Z0-9( )-]*$/,
    email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
};
Constants.cookies = {
    sessionId: "SessionId"
};
Constants.requestHeader = {
    authorization: "Authorization",
    sessionId: "SessionId",
    bearer: "Bearer",
    accept: "Accept",
    contentType: "Content-Type"
};
Constants.apiToken = {
    refreshToken: "grant_type=refresh_token&client_id=web&refresh_token="
};
Constants.contentType = {
    json: "application/json",
    formUrlEncoded: "application/x-www-form-urlencoded",
    multiPart: "multipart/form-data"
};
Constants.uiRoutes = {
    empty: '',
    default: configuration_settings_1.ConfigurationSettings.defaultRoutePrefix,
    login: 'login',
    resetpassword: 'resetpassword'
};
Constants.webApis = {
    login: environment_1.Environment.apiUrl + 'login',
    logout: environment_1.Environment.apiUrl + 'logout',
};
Constants.businessExceptions = {
    SessionExpired: "SessionExpired",
    SessionKilled: "SessionKilled",
    ErrorCode: "ErrorCode",
    MessageCode: "MessageCode"
};
Constants.queryString = {
    SessionExpired: "SessionExpired=true",
    SessionKilled: "SessionKilled=true"
};
Constants.localStorageKeys = {
    userName: "userName",
    apiToken: "apiToken",
    isLoggedIn: "isLoggedIn",
    sessionId: "sessionId"
};
exports.Constants = Constants;
//# sourceMappingURL=constants.js.map