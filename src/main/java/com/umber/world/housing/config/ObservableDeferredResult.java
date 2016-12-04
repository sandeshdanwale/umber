package com.umber.world.housing.config;

import org.springframework.util.Assert;
import org.springframework.web.context.request.async.DeferredResult;

import rx.Observable;

import java.util.List;

public class ObservableDeferredResult<T> extends DeferredResult<List<T>> {

    private static final Object EMPTY_RESULT = new Object();

    private final DeferredResultSubscriber<List<T>> subscriber;

    public ObservableDeferredResult(Observable<T> observable) {
        this(null, EMPTY_RESULT, observable);
    }

    public ObservableDeferredResult(long timeout, Observable<T> observable) {
        this(timeout, EMPTY_RESULT, observable);
    }

    public ObservableDeferredResult(Long timeout, Object timeoutResult, Observable<T> observable) {
        super(timeout, timeoutResult);
        Assert.notNull(observable, "observable can not be null");

        subscriber = new DeferredResultSubscriber<List<T>>(observable.toList(), this);
    }
}