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
var core_1 = require('@angular/core');
var storage = [];
var controlElm = [];
var ChecklistDirective = (function () {
    function ChecklistDirective(el) {
        this.el = el;
        this.name = el.nativeElement.name;
    }
    ChecklistDirective.prototype.change = function () {
        var value = this.el.nativeElement.value;
        if (this.el.nativeElement.checked) {
            if (value === 'all') {
                this.checklist.splice(0);
                for (var i in storage[this.name]) {
                    this.checklist.push(storage[this.name][i]);
                }
            }
            else {
                this.checklist.push(value);
                if (storage[this.name].length === this.checklist.length) {
                    controlElm[this.name].checked = true;
                }
            }
        }
        else {
            if (value === 'all') {
                this.checklist.splice(0);
            }
            else {
                controlElm[this.name].checked = false;
                this.checklist.splice(this.checklist.indexOf(value), 1);
            }
        }
    };
    ChecklistDirective.prototype.ngAfterViewInit = function () {
        var value = this.el.nativeElement.value;
        if (typeof storage[this.name] === 'undefined') {
            storage[this.name] = [];
        }
        if (value !== 'all') {
            storage[this.name].push(value);
        }
        else {
            controlElm[this.name] = this.el.nativeElement;
        }
    };
    ChecklistDirective.prototype.ngOnDestroy = function () {
        storage = [];
        controlElm = [];
    };
    ChecklistDirective.prototype.isChecked = function () {
        var value = this.el.nativeElement.value;
        return (this.checklist.indexOf(value) !== -1);
    };
    __decorate([
        core_1.Input('checklist'), 
        __metadata('design:type', Array)
    ], ChecklistDirective.prototype, "checklist", void 0);
    __decorate([
        core_1.HostListener('change'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ChecklistDirective.prototype, "change", null);
    ChecklistDirective = __decorate([
        core_1.Directive({
            selector: '[checklist]',
            host: {
                '[checked]': 'isChecked()'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], ChecklistDirective);
    return ChecklistDirective;
    var _a;
}());
exports.ChecklistDirective = ChecklistDirective;
//# sourceMappingURL=checklist.js.map