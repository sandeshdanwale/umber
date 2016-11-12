package com.umber.world.housing.config;


import org.springframework.context.ApplicationListener;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.VersionResourceResolver;


@Configuration
@EnableWebMvc
public class WebMvcConfiguration extends WebMvcConfigurerAdapter implements ApplicationListener<ContextRefreshedEvent>{
	@Override
    // Views w/o designated controllers
    public void addViewControllers(ViewControllerRegistry registry) {
    	registry.addViewController("/").setViewName("index");    	 
    	registry.addViewController("/index").setViewName("index");
	}
    
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
}
