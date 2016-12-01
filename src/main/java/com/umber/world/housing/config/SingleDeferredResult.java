package com.umber.world.housing.config;

import org.springframework.web.context.request.async.DeferredResult;

import rx.Single;

public class SingleDeferredResult<T> extends DeferredResult<T> {

    private static final Object EMPTY_RESULT = new Object();

    private final DeferredResultSubscriber<T> subscriber;

    public SingleDeferredResult(Single<T> single) {
        this(null, EMPTY_RESULT, single);
    }

    public SingleDeferredResult(long timeout, Single<T> single) {
        this(timeout, EMPTY_RESULT, single);
    }

    public SingleDeferredResult(Long timeout, Object timeoutResult, Single<T> single) {
        super(timeout, timeoutResult);

        subscriber = new DeferredResultSubscriber<T>(single.toObservable(), this);
    }
}
