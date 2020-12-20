"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ErrorImageComponent = void 0;
var core_1 = require("@angular/core");
var error_images_json_1 = require("../../assets/error-image/error-images.json");
var ErrorImageComponent = /** @class */ (function () {
    function ErrorImageComponent() {
        this.bestOf = 9;
        this.records = error_images_json_1["default"];
        this.level = 0;
        this.startGameBool = false;
    }
    ErrorImageComponent.prototype.ngOnInit = function () {
        this.maxLevel = this.records.length;
    };
    ErrorImageComponent.prototype.toggleStartGame = function () {
        this.startGameBool = !this.startGameBool;
    };
    ErrorImageComponent.prototype.getOriginalImagePath = function (id) {
        if (id < 0 || id > this.records.length - 1) {
            return "assets/error-image/original.png";
        }
        return "assets/error-image/" + id + "/original.png";
    };
    ErrorImageComponent.prototype.getErrorImagePath = function (id) {
        console.log(id);
        if (id < 0 || id > this.records.length - 1) {
            return "assets/error-image/error.png";
        }
        else if (this.records[id].sol) {
            return "assets/error-image/" + id + "/sol.png";
        }
        else if (!this.records[id].sol) {
            return "assets/error-image/" + id + "/error.png";
        }
        else {
            return "";
        }
    };
    ErrorImageComponent.prototype.toggleSol = function (id) {
        this.records[id].sol = !this.records[id].sol;
    };
    ErrorImageComponent.prototype.updateLevel = function (up) {
        if (up && ((this.level + 1) < (this.records.length))) {
            this.level++;
        }
        else if (!up && (this.level > 0)) {
            this.level--;
        }
    };
    ErrorImageComponent = __decorate([
        core_1.Component({
            selector: 'app-error-image',
            templateUrl: './error-image.component.html',
            styleUrls: ['./error-image.component.css']
        })
    ], ErrorImageComponent);
    return ErrorImageComponent;
}());
exports.ErrorImageComponent = ErrorImageComponent;
