package com.umber.world.housing.config;

import org.springframework.http.MediaType;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import rx.Observable;

public class ObservableSseEmitter<T> extends SseEmitter {

    private final ResponseBodyEmitterSubscriber<T> subscriber;

    public ObservableSseEmitter(Observable<T> observable) {
        this(null, observable);
    }

    public ObservableSseEmitter(MediaType mediaType, Observable<T> observable) {
        this(null, mediaType, observable);
    }

    public ObservableSseEmitter(Long timeout, MediaType mediaType, Observable<T> observable) {
        super(timeout);
        this.subscriber = new ResponseBodyEmitterSubscriber<T>(mediaType, observable, this);
    }
}
