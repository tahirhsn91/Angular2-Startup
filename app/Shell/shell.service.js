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
/**
 * Created by tahirhsn on 6/28/2016.
 */
var core_1 = require('@angular/core');
var toDoList_constant_1 = require('../core/constant/toDoList.constant');
var shellService = (function () {
    function shellService() {
    }
    shellService.prototype.getToDoList = function () {
        return toDoList_constant_1.ToDoList;
    };
    // See the "Take it slow" appendix
    shellService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(toDoList_constant_1.ToDoList); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    shellService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], shellService);
    return shellService;
}());
exports.shellService = shellService;
//# sourceMappingURL=shell.service.js.map