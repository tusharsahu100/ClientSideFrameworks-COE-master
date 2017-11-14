"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environment");
exports.ConfigurationSettings = {
    defaultRoutePrefix: "",
    appURL: environment_1.Environment.appUrl,
    numberOfApiRetryAttempt: 3,
    LogLevel: 3,
    supportedBrowserLanguages: ["en", "en-us", "en-gb", "fr"],
    fallbackBrowserLanguage: "en"
};
//# sourceMappingURL=configuration-settings.js.map