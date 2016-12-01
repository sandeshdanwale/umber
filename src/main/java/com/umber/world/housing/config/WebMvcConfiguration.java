package com.umber.world.housing.config;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;


@Configuration
@EnableWebMvc
public class WebMvcConfiguration extends WebMvcConfigurerAdapter implements ApplicationListener<ContextRefreshedEvent>{
	@Override
    // Views w/o designated controllers
    public void addViewControllers(ViewControllerRegistry registry) {
    	registry.addViewController("/").setViewName("index");    	 
    	registry.addViewController("/index").setViewName("index");
	}
	/*
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		ObjectMapper mapper = Jackson2ObjectMapperBuilder.json().defaultViewInclusion(true).build();
		converters.add(new MappingJackson2HttpMessageConverter(mapper));
	}*/
    
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    	
    	registry.addResourceHandler("/libs/**", "/scripts/**", "/styles/**", "/assets/**")
                .addResourceLocations("classpath:/WEB-INF/classes/public/libs/")
                .addResourceLocations("classpath:/WEB-INF/classes/public/scripts/")
                .addResourceLocations("classpath:/WEB-INF/classes/public/styles/")
                .addResourceLocations("classpath:/WEB-INF/classes/public/scripts/src/assets")
                .addResourceLocations("classpath:/public/libs/")
                .addResourceLocations("classpath:/public/scripts/")
                .addResourceLocations("classpath:/public/styles/")
                .addResourceLocations("classpath:/public/scripts/src/assets/")
                .resourceChain(true);
    }

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		// TODO Auto-generated method stub
		
	}
	
	 @Autowired
	 private MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter;

	    @Override
	    public void addArgumentResolvers(
	            List<HandlerMethodArgumentResolver> argumentResolvers) {

	        PageableHandlerMethodArgumentResolver resolver = new PageableHandlerMethodArgumentResolver();
	        resolver.setFallbackPageable(new PageRequest(0, 10));

	        argumentResolvers.add(resolver);
	    }

	    @Override
	    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
	        converters.add(mappingJackson2HttpMessageConverter);
	    }
	    
	    @Override
	    public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> returnValueHandlers) {
	        returnValueHandlers.add(new SingleReturnValueHandler());
	    }

}
