import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
;
export var Scroller = (function () {
    function Scroller(windowElement, $interval, $elementRef, infiniteScrollDownCallback, infiniteScrollUpCallback, infiniteScrollDownDistance, infiniteScrollUpDistance, infiniteScrollParent, infiniteScrollThrottle, isImmediate, horizontal, alwaysCallback, scrollDisabled, _positionResolver) {
        if (horizontal === void 0) { horizontal = false; }
        if (alwaysCallback === void 0) { alwaysCallback = false; }
        if (scrollDisabled === void 0) { scrollDisabled = false; }
        this.windowElement = windowElement;
        this.$interval = $interval;
        this.$elementRef = $elementRef;
        this.infiniteScrollDownCallback = infiniteScrollDownCallback;
        this.infiniteScrollUpCallback = infiniteScrollUpCallback;
        this.infiniteScrollThrottle = infiniteScrollThrottle;
        this.isImmediate = isImmediate;
        this.horizontal = horizontal;
        this.alwaysCallback = alwaysCallback;
        this.scrollDisabled = scrollDisabled;
        this._positionResolver = _positionResolver;
        this.lastScrollPosition = 0;
        this.isContainerWindow = Object.prototype.toString.call(this.windowElement).includes('Window');
        this.documentElement = this.isContainerWindow ? this.windowElement.document.documentElement : null;
        this.handleInfiniteScrollDistance(infiniteScrollDownDistance, infiniteScrollUpDistance);
        // if (attrs.infiniteScrollParent != null) {
        //   attachEvent(angular.element(elem.parent()));
        // }
        this.handleInfiniteScrollDisabled(scrollDisabled);
        this.defineContainer();
        this.positionResolver = this._positionResolver.create({
            container: this.container,
            documentElement: this.documentElement,
            isContainerWindow: this.isContainerWindow,
            horizontal: horizontal
        });
        this.createInterval();
    }
    Scroller.prototype.defineContainer = function () {
        if (this.isContainerWindow) {
            this.container = this.windowElement;
        }
        else {
            this.container = this.windowElement.nativeElement;
        }
        this.attachEvent(this.container);
    };
    Scroller.prototype.createInterval = function () {
        var _this = this;
        if (this.isImmediate) {
            this.checkInterval = this.$interval(function () {
                return _this.handler();
            }, 0);
        }
    };
    Scroller.prototype.handler = function () {
        var _this = this;
        console.log('handler called');
        var container = this.positionResolver.calculatePoints(this.$elementRef);
        var scrollingDown = this.lastScrollPosition < container.scrolledUntilNow;
        this.lastScrollPosition = container.scrolledUntilNow;
        var remaining;
        var containerBreakpoint;
        if (scrollingDown) {
            remaining = container.totalToScroll - container.scrolledUntilNow;
            containerBreakpoint = container.height * this.scrollDownDistance + 1;
        }
        else {
            remaining = container.scrolledUntilNow;
            containerBreakpoint = container.height * this.scrollUpDistance + 1;
        }
        var shouldScroll = remaining <= containerBreakpoint;
        var triggerCallback = (this.alwaysCallback || shouldScroll) && this.scrollEnabled;
        var shouldClearInterval = !shouldScroll && this.checkInterval;
        // if (this.useDocumentBottom) {
        //   container.totalToScroll = this.height(this.$elementRef.nativeElement.ownerDocument);
        // }
        this.checkWhenEnabled = shouldScroll;
        if (triggerCallback) {
            var infiniteScrollEvent = {
                currentScrollPosition: container.scrolledUntilNow
            };
            if (scrollingDown) {
                this.infiniteScrollDownCallback(infiniteScrollEvent);
            }
            else {
                this.infiniteScrollUpCallback(infiniteScrollEvent);
            }
        }
        if (shouldClearInterval) {
            clearInterval(this.checkInterval);
        }
        setTimeout(function () {
            var container = _this.positionResolver.calculatePoints(_this.$elementRef);
            if (container.scrolledUntilNow >= container.totalToScroll) {
                _this.handler();
            }
        }, this.infiniteScrollThrottle);
    };
    Scroller.prototype.handleInfiniteScrollDistance = function (scrollDownDistance, scrollUpDistance) {
        this.scrollDownDistance = parseFloat(scrollDownDistance) || 0;
        this.scrollUpDistance = parseFloat(scrollUpDistance) || 0;
    };
    Scroller.prototype.attachEvent = function (newContainer) {
        var _this = this;
        this.clean();
        if (newContainer) {
            var throttle_1 = this.infiniteScrollThrottle;
            this.disposeScroll = Observable.fromEvent(this.container, 'scroll')
                .throttle(function (ev) { return Observable.timer(throttle_1); })
                .filter(function (ev) { return _this.scrollEnabled; })
                .subscribe(function (ev) { return _this.handler(); });
        }
    };
    Scroller.prototype.clean = function () {
        if (this.disposeScroll) {
            this.disposeScroll.unsubscribe();
        }
    };
    Scroller.prototype.handleInfiniteScrollDisabled = function (scrollDisabled) {
        this.scrollEnabled = !scrollDisabled;
    };
    return Scroller;
}());
//# sourceMappingURL=/Users/advayabha/devenv/repo/smart2/umber/src/main/resources/public/scripts/src/app/components/shared/infinite-scroll/scroller.js.map