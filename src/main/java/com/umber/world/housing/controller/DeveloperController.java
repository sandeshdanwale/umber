package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.domain.Developer;
import com.umber.world.housing.domain.aggregate.DeveloperId;
import com.umber.world.housing.jackson.LocationId;
import com.umber.world.housing.model.UmberDeveloper;
import com.umber.world.housing.model.UmberLocation;
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
	
	@RequestMapping(value={"/details/{id}"})
    public Single<UmberDeveloper> getPropertyDetails(@PathVariable String id) {
		return developerService.findDetailsByDeveloperId(new DeveloperId(id))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
}


