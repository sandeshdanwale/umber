package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.model.UmberDeveloper;
import com.umber.world.housing.service.DeveloperService;

import rx.Single;

@RestController
@RequestMapping("/developer")
public class DeveloperController {
	
	@Autowired
	private DeveloperService developerService;
	
	
	@RequestMapping(value={"/", "", "/featuredDevelopers"})
    public Single<List<UmberDeveloper>> featuredProperties() {
		return developerService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Developer Query Service API {} failed :: {} ");
                    return null;
                });
    }
}


