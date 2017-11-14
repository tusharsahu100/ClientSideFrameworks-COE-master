"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environment");
exports.ConfigurationSettings = {
    defaultRoutePrefix: "",
    appURL: environment_1.Environment.appUrl,
    numberOfApiRetryAttempt: 3,
    LogLevel: 3,
    isRethrowErrorInsideGlobalErrorHandler: false,
    isUnwrapErrorInsideGlobalErrorHandler: true,
    islogErrorToConsoleInsideGlobalErrorHandler: true,
    isSendErrorToServerInsideGlobalErrorHandler: true,
    isShowErrorDialogInsideGlobalErrorHandler: true,
    supportedBrowserLanguages: ["en", "en-us", "en-gb", "fr"],
    fallbackBrowserLanguage: "en"
};
exports.ToastrOptions = {
    animate: 'fade',
    positionClass: 'toast-top-full-width',
    dismiss: 'click',
    maxShown: 1,
    showCloseButton: true,
    newestOnTop: true
};
exports.AutoCloseToastrOptions = {
    toastLife: 5000,
    dismiss: 'auto'
};
exports.CustomToastrOptions = {
    toastLife: 5000,
    dismiss: 'auto',
    enableHTML: true
};
//# sourceMappingURL=configuration-settings.js.map