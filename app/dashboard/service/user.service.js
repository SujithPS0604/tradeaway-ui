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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://localhost:8080/";
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (type, id) {
        return this.http.get(this.url + type.toLowerCase() + "/" + id, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.verifyUser = function (user) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Basic " + btoa(user.userName + ":" + user.password));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get(this.url + user.type.toLowerCase() + "/search/findByUserName?userName=" + user.userName, { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.registerUser = function (user) {
        return this.http.post(this.url + user.type.toLowerCase(), JSON.stringify(user), options)
            .map(function (res) { console.info(res); return res.json(); });
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.getUserUrl(user.id), JSON.stringify(user), options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.getUserUrl(id), options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.logout = function (userName, password) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Basic " + btoa(userName + ":" + password));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.post(this.url + "logout", {}, { headers: headers, withCredentials: true });
    };
    UserService.prototype.getUserUrl = function (id) {
        return this.url + "/" + id;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map