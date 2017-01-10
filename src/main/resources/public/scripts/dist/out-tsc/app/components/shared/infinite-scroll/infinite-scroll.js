var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { Scroller } from './scroller';
import { PositionResolverFactory } from './position-resolver';
export var InfiniteScroll = (function () {
    function InfiniteScroll(element, zone, positionResolverFactory) {
        this.element = element;
        this.zone = zone;
        this.positionResolverFactory = positionResolverFactory;
        this._distanceDown = 2;
        this._distanceUp = 1.5;
        this._throttle = 300;
        this._disabled = false;
        this.scrollWindow = true;
        this._immediate = false;
        this._horizontal = false;
        this._alwaysCallback = false;
        this.scrolled = new EventEmitter();
        this.scrolledUp = new EventEmitter();
    }
    InfiniteScroll.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            var containerElement = this.scrollWindow ? window : this.element;
            this.scroller = new Scroller(containerElement, setInterval, this.element, this.onScrollDown.bind(this), this.onScrollUp.bind(this), this._distanceDown, this._distanceUp, {}, this._throttle, this._immediate, this._horizontal, this._alwaysCallback, this._disabled, this.positionResolverFactory);
        }
    };
    InfiniteScroll.prototype.ngOnDestroy = function () {
        if (this.scroller) {
            this.scroller.clean();
        }
    };
    InfiniteScroll.prototype.ngOnChanges = function (changes) {
        if (changes['_disabled'] && this.scroller) {
            this.scroller.handleInfiniteScrollDisabled(changes['_disabled'].currentValue);
        }
    };
    InfiniteScroll.prototype.onScrollDown = function (data) {
        var _this = this;
        if (data === void 0) { data = { currentScrollPosition: 0 }; }
        this.zone.run(function () { return _this.scrolled.next(data); });
    };
    InfiniteScroll.prototype.onScrollUp = function (data) {
        var _this = this;
        if (data === void 0) { data = { currentScrollPosition: 0 }; }
        this.zone.run(function () { return _this.scrolledUp.next(data); });
    };
    __decorate([
        Input('infiniteScrollDistance'), 
        __metadata('design:type', Number)
    ], InfiniteScroll.prototype, "_distanceDown", void 0);
    __decorate([
        Input('infiniteScrollUpDistance'), 
        __metadata('design:type', Number)
    ], InfiniteScroll.prototype, "_distanceUp", void 0);
    __decorate([
        Input('infiniteScrollThrottle'), 
        __metadata('design:type', Number)
    ], InfiniteScroll.prototype, "_throttle", void 0);
    __decorate([
        Input('infiniteScrollDisabled'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "_disabled", void 0);
    __decorate([
        Input('scrollWindow'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "scrollWindow", void 0);
    __decorate([
        Input('immediateCheck'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "_immediate", void 0);
    __decorate([
        Input('horizontal'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "_horizontal", void 0);
    __decorate([
        Input('alwaysCallback'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "_alwaysCallback", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], InfiniteScroll.prototype, "scrolled", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], InfiniteScroll.prototype, "scrolledUp", void 0);
    InfiniteScroll = __decorate([
        Directive({
            selector: '[infinite-scroll]'
        }), 
        __metadata('design:paramtypes', [ElementRef, NgZone, PositionResolverFactory])
    ], InfiniteScroll);
    return InfiniteScroll;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/shared/infinite-scroll/infinite-scroll.js.map