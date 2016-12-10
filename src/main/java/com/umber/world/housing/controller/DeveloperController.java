package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.model.UmberDeveloper;
import com.umber.world.housing.model.UmberDeveloperWords;
import com.umber.world.housing.service.DeveloperService;
import com.umber.world.housing.service.DeveloperWordsService;

import rx.Single;

@RestController
@RequestMapping("/developer")
public class DeveloperController {
	
	@Autowired
	private DeveloperService developerService;
	
	@Autowired
	private DeveloperWordsService developerWordsService;
	
	
	@RequestMapping(value={"/", "", "/featuredDevelopers"})
    public Single<List<UmberDeveloper>> featuredProperties() {
		return developerService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Developer Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/details/{id}"})
    public Single<UmberDeveloper> getPropertyDetails(@PathVariable String id) {
		return developerService.findDetailsByDeveloperId(new DeveloperId(id))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/{id}"})
    public Single<List<UmberDeveloperWords>> findByIdStartsWith(@PathVariable String id) {
		return developerWordsService.findByDeveloperIdStartsWith(id)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
}


