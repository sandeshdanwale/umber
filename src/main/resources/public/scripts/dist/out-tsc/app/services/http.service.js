var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
/*
* Minerva wrapper for Angular's HTTP service to add headers for common requests.
*/
export var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.constructHeaders();
    }
    HttpService.prototype.constructHeaders = function () {
        var headers = new Headers();
        headers.set('Content-Type', 'application/json');
        this.headers = { headers: headers };
    };
    HttpService.prototype.post = function (url, options) {
        this.constructHeaders();
        return this.http.post(url, options, this.headers);
    };
    HttpService.prototype.get = function (url) {
        return this.http.get(url, this.headers);
    };
    HttpService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], HttpService);
    return HttpService;
}());
export var HTTP_SERVICE_BINDINGS = [
    HttpService
];
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/services/http.service.js.map