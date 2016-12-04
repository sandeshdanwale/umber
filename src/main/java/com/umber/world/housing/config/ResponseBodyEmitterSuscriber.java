package com.umber.world.housing.config;

import org.springframework.http.MediaType;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyEmitter;
import rx.Observable;
import rx.Subscriber;
import rx.Subscription;

import java.io.IOException;

class ResponseBodyEmitterSubscriber<T> extends Subscriber<T> implements Runnable {

    private final MediaType mediaType;

    private final Subscription subscription;

    private final ResponseBodyEmitter responseBodyEmitter;

    private boolean completed;

    public ResponseBodyEmitterSubscriber(MediaType mediaType, Observable<T> observable, ResponseBodyEmitter responseBodyEmitter) {

        this.mediaType = mediaType;
        this.responseBodyEmitter = responseBodyEmitter;
        this.responseBodyEmitter.onTimeout(this);
        this.responseBodyEmitter.onCompletion(this);
        this.subscription = observable.subscribe(this);
    }

    @Override
    public void onNext(T value) {

        try {
            if(!completed) {
                responseBodyEmitter.send(value, mediaType);
            }
        } catch (IOException e) {
            throw new RuntimeException(e.getMessage(), e);
        }
    }

    @Override
    public void onError(Throwable e) {
        responseBodyEmitter.completeWithError(e);
    }

    @Override
    public void onCompleted() {
        if(!completed) {
            completed = true;
            responseBodyEmitter.complete();
        }
    }

    @Override
    public void run() {
        subscription.unsubscribe();
    }
}
