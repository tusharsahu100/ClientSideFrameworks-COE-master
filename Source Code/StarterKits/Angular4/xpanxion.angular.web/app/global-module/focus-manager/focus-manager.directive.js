"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../services/index");
var FocusManager = (function () {
    function FocusManager(el, renderer, _notificationService) {
        this.el = el;
        this.renderer = renderer;
        this._notificationService = _notificationService;
        this.focusIndexAttribute = "focusIndex";
        this.TabKey = 9;
        this.productSliderSlideIdSelector = "activeSlideId";
        this.productSliderItemCSSSClass = "item";
        this.productSliderActiveCSSSClass = "active";
        this.profileDropDownMenuCSSClass = "top-right-drp-down-menu";
        this.invoiceDropDownMenuCSSClass = "dropdown-toggle";
        this.receiveLinkMenuId = "lnkReceiveMenu";
        this.bodyTagName = "BODY";
        this.divTagName = "DIV";
        this.imageTagName = "IMG";
        this.tabIndexText = "tabIndex";
        this.tabIndexValue = "-1";
        this.checkBoxType = "checkbox";
        this.checkboxOffsetParentClass = "opt-filters";
        this.dataDismissAttribute = "data-dismiss";
        this.closeClass = "close";
        this.buttonTag = "BUTTON";
        this.previousActiveFocusStack = [];
        this.modalCloseButtonFocusIndex = 100000;
        this.modalDialogClass = "modal";
        this.isMenuOrDialogOpen = false;
        this.parentElement = el;
        this.elementsWithFocusIndex = [];
        this.facetElementsWithFocusIndex = [];
    }
    FocusManager.prototype.onKeyDown = function (event) {
        var keyCode = event.keyCode || event.which;
        var focusElement = null;
        if (keyCode == this.TabKey) {
            //if (this.isNavigateFromBegining()) {            
            this.activeFocusIndex = this.elementsWithFocusIndex.indexOf(document.activeElement);
            this.isMenuOrDialogOpen = this.elementsWithFocusIndex.length > 0 && parseInt(this.elementsWithFocusIndex[0].getAttribute(this.focusIndexAttribute)) > 1;
            if (this.activeFocusIndex == -1 && this.isMenuOrDialogOpen)
                this.activeFocusIndex = 0;
            //} 
            while (focusElement == null) {
                if (event.shiftKey) {
                    this.activeFocusIndex--;
                    if (this.activeFocusIndex >= 0)
                        focusElement = this.elementsWithFocusIndex[this.activeFocusIndex];
                    else {
                        if (this.isMenuOrDialogOpen) {
                            this.activeFocusIndex = this.elementsWithFocusIndex.length - 1;
                            focusElement = this.elementsWithFocusIndex[this.activeFocusIndex];
                        }
                        else {
                            return;
                        }
                    }
                }
                else {
                    this.activeFocusIndex++;
                    if (this.activeFocusIndex < this.elementsWithFocusIndex.length)
                        focusElement = this.elementsWithFocusIndex[this.activeFocusIndex];
                    else {
                        if (this.isMenuOrDialogOpen) {
                            this.activeFocusIndex = 0;
                            focusElement = this.elementsWithFocusIndex[this.activeFocusIndex];
                        }
                        else {
                            return;
                        }
                    }
                }
                if (focusElement != null) {
                    if ((focusElement.disabled != null && focusElement.disabled == true) ||
                        (focusElement.offsetWidth === 0 && focusElement.offsetHeight === 0))
                        focusElement = null;
                    else if (focusElement.attributes[this.productSliderSlideIdSelector] != null && focusElement.attributes[this.productSliderSlideIdSelector].value != null &&
                        !this.isCurrentSlideActive(focusElement.attributes[this.productSliderSlideIdSelector].value)) {
                        focusElement = null;
                    }
                    else {
                        if (focusElement.type == this.checkBoxType && focusElement.offsetParent != null && focusElement.offsetParent.className == this.checkboxOffsetParentClass
                            && (this.facetElementsWithFocusIndex == null || (this.facetElementsWithFocusIndex != null && this.facetElementsWithFocusIndex.find(function (x) { return x.attributes.focusIndex == focusElement.attributes.focusIndex; }) == null))) {
                            this.facetElementsWithFocusIndex.push(focusElement);
                        }
                        event.preventDefault();
                        this.setFocusOnElement(focusElement);
                    }
                }
            }
        }
    };
    FocusManager.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.buildElementsWithFocusIndex();
        this._notificationService.contentLoadedNotification.subscribe(function (data) {
            if (data !== null && data !== undefined && data.element !== null && data.setPreviousActiveIndex && !data.restorePreviousActiveIndex) {
                _this.previousActiveFocusStack.push(_this.activeFocusIndex);
            }
            if (data !== null && data !== undefined && data.hasRouteChange) {
                _this.previousActiveFocusStack.push(_this.activeFocusIndex);
            }
            if (data !== null && data !== undefined && data.restorePreviousActiveIndex && data.setPreviousActiveIndex === undefined) {
                _this.previousActiveFocusStack.push(_this.activeFocusIndex);
            }
            _this.elementsWithFocusIndex = null;
            _this.elementsWithFocusIndex = [];
            _this.buildElementsWithFocusIndex(data);
        });
    };
    FocusManager.prototype.buildElementsWithFocusIndex = function (data) {
        var targetElement = data !== null && data !== undefined && data.element !== null && data.element !== undefined ? data.element.nativeElement : this.parentElement.nativeElement;
        this.populateAllElementsHavingFocusIndex(targetElement);
        if (data !== null && data !== undefined && data.isLazyLoadingEnabledUI == true)
            return;
        if (this.elementsWithFocusIndex.length > 0) {
            var arrayToSort = this.elementsWithFocusIndex;
            this.elementsWithFocusIndex = this.sortFocusElements(arrayToSort, false);
            if (((data === null || data === undefined) || (data.restorePreviousActiveIndex == true)) && this.previousActiveFocusStack.length > 0) {
                var lastActiveIndex = this.previousActiveFocusStack.pop();
                if (lastActiveIndex !== 0 && this.activeFocusIndex !== 0) {
                    this.setFocusOnElement(this.getNextActiveElement(lastActiveIndex));
                }
            }
            else if (data !== null && data !== undefined && data.retainCurrentActiveIndex === true) {
                this.setFocusOnElement(this.elementsWithFocusIndex[this.activeFocusIndex]);
            }
            else {
                this.setFocusOnElement(this.elementsWithFocusIndex[0]);
                if (this.facetElementsWithFocusIndex != null && this.facetElementsWithFocusIndex.length == 0)
                    this.activeFocusIndex = 0;
            }
        }
    };
    FocusManager.prototype.sortFocusElements = function (arrayToSort, isSortDescending) {
        var that = this;
        arrayToSort.sort(function (a, b) {
            if (isSortDescending) {
                return parseInt(b.getAttribute(that.focusIndexAttribute)) - parseInt(a.getAttribute(that.focusIndexAttribute));
            }
            return parseInt(a.getAttribute(that.focusIndexAttribute)) - parseInt(b.getAttribute(that.focusIndexAttribute));
        });
        return arrayToSort;
    };
    FocusManager.prototype.getNextActiveElement = function (previousElementIndex) {
        for (var i = previousElementIndex; i < this.elementsWithFocusIndex.length; i++) {
            if ((this.elementsWithFocusIndex[i].offsetWidth > 0 || this.elementsWithFocusIndex[i].offsetHeight > 0)) {
                this.activeFocusIndex = i;
                return this.elementsWithFocusIndex[i];
            }
        }
        this.activeFocusIndex = this.elementsWithFocusIndex.length - 1;
        return this.elementsWithFocusIndex[this.activeFocusIndex];
    };
    FocusManager.prototype.setFocusOnElement = function (currentElement) {
        currentElement.focus();
    };
    FocusManager.prototype.populateAllElementsHavingFocusIndex = function (currentElement) {
        var isModalCloseButton = this.isModalCloseButton(currentElement);
        if (this.hasValidFocusIndex(currentElement) || isModalCloseButton) {
            if (currentElement.tagName == this.divTagName || currentElement.tagName == this.imageTagName || currentElement.type == this.checkBoxType)
                currentElement.setAttribute(this.tabIndexText, this.tabIndexValue);
            if (isModalCloseButton) {
                currentElement.setAttribute(this.focusIndexAttribute, (this.getMaxFocusIndex() + this.modalCloseButtonFocusIndex)); //to push the close button to last position
            }
            this.elementsWithFocusIndex.push(currentElement);
        }
        if (currentElement.childElementCount > 0) {
            for (var i = 0; i < currentElement.childElementCount; i++)
                this.populateAllElementsHavingFocusIndex(currentElement.children[i]);
        }
    };
    FocusManager.prototype.getMaxFocusIndex = function () {
        if (this.elementsWithFocusIndex.length === 0)
            return 0;
        var arrayToSort = this.elementsWithFocusIndex;
        var sortedArray = this.sortFocusElements(arrayToSort, true);
        return sortedArray[0].getAttribute(this.focusIndexAttribute);
    };
    FocusManager.prototype.hasValidFocusIndex = function (currentElement) {
        return (this.doesAttributeExists(currentElement, this.focusIndexAttribute) &&
            currentElement.attributes[this.focusIndexAttribute].value != "" && parseInt(currentElement.attributes[this.focusIndexAttribute].value) > 0);
    };
    FocusManager.prototype.isModalCloseButton = function (currentElement) {
        return (currentElement.tagName === this.buttonTag && this.doesAttributeExists(currentElement, this.dataDismissAttribute) &&
            currentElement.attributes[this.dataDismissAttribute].value === this.modalDialogClass && this.hasCssClass(currentElement, this.closeClass));
    };
    FocusManager.prototype.hasCssClass = function (currentElement, classToSearch) {
        return (currentElement.classList.length > 0 && currentElement.classList.contains(classToSearch));
    };
    FocusManager.prototype.doesAttributeExists = function (currentElement, attributeName) {
        return (currentElement.attributes.length > 0 && currentElement.attributes[attributeName] != null
            && currentElement.attributes[attributeName] != "");
    };
    FocusManager.prototype.isCurrentSlideActive = function (slideId) {
        var slide = document.getElementById(slideId);
        return (slide != null && slide.classList.contains(this.productSliderItemCSSSClass) && slide.classList.contains(this.productSliderActiveCSSSClass));
    };
    FocusManager.prototype.isNavigateFromBegining = function () {
        return (document.activeElement.tagName != this.bodyTagName &&
            !document.activeElement.classList.contains(this.profileDropDownMenuCSSClass) &&
            !document.activeElement.classList.contains(this.invoiceDropDownMenuCSSClass) &&
            document.activeElement.id != this.receiveLinkMenuId);
    };
    return FocusManager;
}());
__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FocusManager.prototype, "onKeyDown", null);
FocusManager = __decorate([
    core_1.Directive({
        selector: '[focus-manager]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer,
        index_1.NotificationService])
], FocusManager);
exports.FocusManager = FocusManager;
//# sourceMappingURL=focus-manager.directive.js.map