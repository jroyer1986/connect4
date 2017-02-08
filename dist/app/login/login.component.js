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
var core_1 = require("@angular/core");
var LoginComponent = (function () {
    function LoginComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.active = true;
    }
    LoginComponent.prototype.onSubmit = function () {
        console.log('Account Submitted');
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "userCreated", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: "\n\t\t<div class=\"login-form\">\n\t\t\t<form #login=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': email.invalid && email.touched }\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" \n\t\t\t\t\tplaceholder=\"Email Address\" \n\t\t\t\t\tname=\"email\" \n\t\t\t\t\trequired\n\t\t\t\t\t[(ngModel)]=\"account.email\"\n\t\t\t\t\t#email=\"ngModel\">\n\n\t\t\t\t\t<span class=\"help-block\" *ngIf=\"name.touched && name.invalid\">Name is Required.</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': password.invalid && password.touched }\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" \n\t\t\t\t\tplaceholder=\"Password\"\n\t\t\t\t\tname=\"password\" \n\t\t\t\t\trequired\n\t\t\t\t\t[(ngModel)]=\"account.password\"\n\t\t\t\t\t#password=\"ngModel\">\n\n\t\t\t\t\t<span class=\"help-block\" *ngIf=\"password.touched && password.invalid\">Password is Required.</span>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn.lg btn.block btn.primary\"\n\t\t\t\t\t[disabled]=\"form.invalid\">\n\t\t\t\t\t\tLog In!\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>\n\t",
        styles: []
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map