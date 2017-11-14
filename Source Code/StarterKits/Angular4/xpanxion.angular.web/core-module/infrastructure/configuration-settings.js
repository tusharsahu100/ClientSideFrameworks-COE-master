"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationSettings = {
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
exports.SystemMessageToastrOptions = {
    toastLife: 0,
    dismiss: 'click',
    showCloseButton: false,
    enableHTML: true
};
//# sourceMappingURL=configuration-settings.js.map