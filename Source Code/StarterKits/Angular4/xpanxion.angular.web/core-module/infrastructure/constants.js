"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
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
Constants.queryString = {
    SessionExpired: "SessionExpired=true",
    SessionKilled: "SessionKilled=true",
    me: "?me"
};
Constants.localStorageKeys = {
    apiToken: "apiToken",
    isLoggedIn: "isLoggedIn",
    sessionId: "sessionId"
};
exports.Constants = Constants;
//# sourceMappingURL=constants.js.map