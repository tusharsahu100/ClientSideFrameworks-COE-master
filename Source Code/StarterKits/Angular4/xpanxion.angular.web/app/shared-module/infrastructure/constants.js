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
Constants.checkoutRedirectToAction = {
    profilePage: 1,
    checkoutPage: 2,
    checkoutFunction: 3
};
Constants.iCCartDeliveryMethod = {
    serverPostXml: 1,
    serverPostFormEncoded: 2,
    clientPostFormEncoded: 3,
    clientBase64Encoded: 4
};
Constants.imageExtension = {
    jpeg: ".jpeg",
    jpg: ".jpg"
};
Constants.headerConstant = {
    xpLogo: "xpTopRightLogo.png",
    maxTransactionCount: 99,
    maxTransactionToUpdate: 100,
    replaceableCount: "({0})"
};
Constants.uiRoutes = {
    empty: '',
    default: configuration_settings_1.ConfigurationSettings.defaultRoutePrefix,
    login: 'login',
    resetpassword: 'resetpassword',
    product: 'product',
    offer: 'offer',
    order: 'order',
    invoice: 'invoice'
};
Constants.webApis = {
    logout: environment_1.Environment.apiUrl + 'account/logout',
    getSharedData: environment_1.Environment.apiUrl + 'account/getUserData'
};
Constants.nonCatalogSearchCriteria = {
    startPage: 1,
    startPageSize: 6
};
Constants.scrollSettings = {
    infiniteScrollDistance: 10,
    infiniteScrollThrottle: 500
};
Constants.searchCriteria = {
    startPage: 1,
    startPageSize: 12,
    activePrice: "ActivePrice",
    sortOrderAscending: "Asc",
    sortOrderDescending: "Desc",
    relevance: "Relevance",
    emptyFacet: "empty",
    notSpecifiedValue: "Not Specified",
    itemDefaultValue: -1,
    preferredSupplier: "Preferred",
    supplier: "Supplier",
    manufacturer: "Manufacturer",
    contract: "Contract",
    preferred: "Preferred Supplier",
    facetFilter: "facetFilter",
    underPriceFacet: "Under ",
    abovePriceFacet: " and above",
    priceTo: " to ",
    onContract: " On Contract",
};
Constants.userSearchCriteria = {
    startPage: 1,
    startPageSize: 10
};
Constants.attachmentValidation = {
    AttachmentSizeLimit: 5,
    AttachemntLimitAtNoteLevel: 5,
    AttachmentInvalidExtensions: ".exe, .com, .bat, .pif, .application, .gadget, .msi, .msp, .scr, .hta, .cpl, .msc, .jar, .bat, .vb, .vbs, .vbe, .js, .jse, .ws, .wsf, .wsc, .wsh, .ps1, .ps1xml, .ps2, .ps2xml, .psc1, .psc2, .msh, .msh1, .msh2, .mshxml, .msh1xml, .msh2xml, .scf, .lnk, .inf, .reg, .docm, .dotm, .xlsm, .xltm, .xlam, .pptm, .potm, .ppam, .ppsm, .sldm",
    TotalAttachmentSizeAcrossAllExternalNotes: 15,
    TotalAttachmentSizeAcrossAllInternalNotes: 15,
    TotalAttachmentSizeAtRequisitionLevel: 30 //size in MB
};
Constants.businessExceptions = {
    SessionExpired: "SessionExpired",
    SessionKilled: "SessionKilled",
    ErrorCode: "ErrorCode",
    IsIntegratedCart: "IsIntegratedCart",
    MessageCode: "MessageCode"
};
Constants.queryString = {
    SessionExpired: "SessionExpired=true",
    SessionKilled: "SessionKilled=true",
    me: "?me"
};
Constants.localStorageKeys = {
    isSystemMessageClosed: "isSystemMessageClosed",
    isSuppressNonCatalogItemEnabled: "isSuppressNonCatalogItemEnabled"
};
Constants.splitChars = {
    comma: ","
};
Constants.cookies = {
    sessionId: "SessionId"
};
Constants.requestHeader = {
    contentType: "Content-Type"
};
Constants.contentType = {
    json: "application/json; charset=utf-8"
};
exports.Constants = Constants;
//# sourceMappingURL=constants.js.map