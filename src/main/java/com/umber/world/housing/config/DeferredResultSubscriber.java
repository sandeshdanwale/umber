package com.umber.world.housing.config;

import org.springframework.web.context.request.async.DeferredResult;

import rx.Observable;
import rx.Subscriber;
import rx.Subscription;

class DeferredResultSubscriber<T> extends Subscriber<T> implements Runnable {

    private final DeferredResult<T> deferredResult;

    private final Subscription subscription;

    public DeferredResultSubscriber(Observable<T> observable, DeferredResult<T> deferredResult) {
        this.deferredResult = deferredResult;
        this.deferredResult.onTimeout(this);
        this.deferredResult.onCompletion(this);
        this.subscription = observable.subscribe(this);
    }

    @Override
    public void onNext(T value) {
        deferredResult.setResult(value);
    }

    @Override
    public void onError(Throwable e) {
        deferredResult.setErrorResult(e);
    }

    @Override
    public void onCompleted() {
    }

    @Override
    public void run() {
        this.subscription.unsubscribe();
    }
}
