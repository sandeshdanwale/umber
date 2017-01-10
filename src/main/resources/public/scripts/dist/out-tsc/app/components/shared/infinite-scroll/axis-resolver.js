var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
export var AxisResolverFactory = (function () {
    function AxisResolverFactory() {
    }
    AxisResolverFactory.prototype.create = function (vertical) {
        if (vertical === void 0) { vertical = true; }
        return new AxisResolver(vertical);
    };
    AxisResolverFactory = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], AxisResolverFactory);
    return AxisResolverFactory;
}());
export var AxisResolver = (function () {
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
    }
    AxisResolver.prototype.clientHeightKey = function () { return this.vertical ? 'clientHeight' : 'clientWidth'; };
    AxisResolver.prototype.offsetHeightKey = function () { return this.vertical ? 'offsetHeight' : 'offsetWidth'; };
    AxisResolver.prototype.scrollHeightKey = function () { return this.vertical ? 'scrollHeight' : 'scrollWidth'; };
    AxisResolver.prototype.pageYOffsetKey = function () { return this.vertical ? 'pageYOffset' : 'pageXOffset'; };
    AxisResolver.prototype.offsetTopKey = function () { return this.vertical ? 'offsetTop' : 'offsetLeft'; };
    AxisResolver.prototype.scrollTopKey = function () { return this.vertical ? 'scrollTop' : 'scrollLeft'; };
    AxisResolver.prototype.topKey = function () { return this.vertical ? 'top' : 'left'; };
    return AxisResolver;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/shared/infinite-scroll/axis-resolver.js.map