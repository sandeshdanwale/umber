package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.model.UmberLocation;
import com.umber.world.housing.service.LocationService;

import rx.Single;

@RestController
@RequestMapping("/location")
public class LocationController {
	
	@Autowired
	private LocationService locationService;
	
	
	@RequestMapping(value={"/", "", "/featuredLocations"})
    public Single<List<UmberLocation>> featuredProperties() {
		return locationService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Developer Query Service API {} failed :: {} ");
                    return null;
                });
    }
}



