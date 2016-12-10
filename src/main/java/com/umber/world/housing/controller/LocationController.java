package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.jackson.LocationId;
import com.umber.world.housing.model.UmberLocation;
import com.umber.world.housing.model.UmberLocationWords;
import com.umber.world.housing.service.LocationService;
import com.umber.world.housing.service.LocationWordsService;

import rx.Single;

@RestController
@RequestMapping("/location")
public class LocationController {
	
	@Autowired
	private LocationService locationService;
	
	@Autowired
	private LocationWordsService locationWordsService;
	
	
	@RequestMapping(value={"/", "", "/featuredLocations"})
    public Single<List<UmberLocation>> featuredProperties() {
		return locationService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Developer Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/details/{id}"})
    public Single<UmberLocation> getPropertyDetails(@PathVariable String id) {
		return locationService.findDetailsByLocationId(new LocationId(id))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/{id}"})
    public Single<List<UmberLocationWords>> findByIdStartsWith(@PathVariable String id) {
		return locationWordsService.findByDeveloperIdStartsWith(id)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
}



