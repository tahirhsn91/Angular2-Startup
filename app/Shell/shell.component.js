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
 * Created by tahirhsn on 6/27/2016.
 */
var core_1 = require('@angular/core');
var shell_service_1 = require('./shell.service');
var shell = (function () {
    function shell(shellService) {
        this.shellService = shellService;
        this.title = 'ToDo List';
        this.toDoList = [];
        this.newItem = '';
    }
    shell.prototype.ngOnInit = function () {
        //this.shellService.getToDoList().then(toDoList => this.toDoList = toDoList);
        this.toDoList = this.shellService.getToDoList();
    };
    shell.prototype.add = function () {
        this.toDoList.push({ "value": this.newItem });
        this.newItem = "";
    };
    shell.prototype.remove = function (item) {
        this.toDoList.pop(item);
    };
    shell.prototype.done = function (item) {
        if (item.done) {
            item.done = false;
        }
        else {
            item.done = true;
        }
    };
    shell = __decorate([
        core_1.Component({
            selector: 'shell',
            templateUrl: './app/shell/shell.html',
            providers: [shell_service_1.shellService]
        }), 
        __metadata('design:paramtypes', [shell_service_1.shellService])
    ], shell);
    return shell;
}());
exports.shell = shell;
//# sourceMappingURL=shell.component.js.map