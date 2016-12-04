package com.umber.world.housing.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.AsyncHandlerMethodReturnValueHandler;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import com.umber.world.housing.config.SingleReturnValueHandler;
import com.umber.world.housing.config.ObservableReturnValueHandler;

import rx.Observable;
import rx.Single;

import java.util.ArrayList;
import java.util.List;

@Configuration
@ConditionalOnProperty(value = "rxjava.mvc.enabled", matchIfMissing = true)
public class RxJavaMvcAutoConfiguration {

    @Bean
    @RxJava
    @ConditionalOnMissingBean
    @ConditionalOnClass(Observable.class)
    public ObservableReturnValueHandler observableReturnValueHandler() {
        return new ObservableReturnValueHandler();
    }

    @Bean
    @RxJava
    @ConditionalOnMissingBean
    @ConditionalOnClass(Single.class)
    public SingleReturnValueHandler singleReturnValueHandler() {
        return new SingleReturnValueHandler();
    }

    @Configuration
    public static class RxJavaWebConfiguration {

        @RxJava
        @Autowired
        private List<AsyncHandlerMethodReturnValueHandler> handlers = new ArrayList<AsyncHandlerMethodReturnValueHandler>();

        @Bean
        public WebMvcConfigurer rxJavaWebMvcConfiguration() {
            return new WebMvcConfigurerAdapter() {
                @Override
                public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> returnValueHandlers) {
                    if (handlers != null) {
                        returnValueHandlers.addAll(handlers);
                    }
                }
            };
        }
    }
}