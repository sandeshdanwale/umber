package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.model.UmberDeveloper;
import com.umber.world.housing.model.UmberProperty;
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
	
	@RequestMapping(value={"/featuredDevelopersByCity"})
    public Single<List<UmberDeveloper>> featuredPropertiesByCity(@RequestParam(value="cityId", required=true) String cityId) {
		return developerService.findByFeaturedAndCityId(true, new CityId(cityId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Developer Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/globalFeaturedDevelopers"})
    public Single<List<UmberDeveloper>> globalfeaturedProperties() {
		return developerService.findByGlobalFeatured(true)
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
	
	@RequestMapping(value={"/search/{id}/{name}"})
    public Single<List<UmberDeveloper>> findByCityAndByNameStartsWith(@PathVariable String id, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return developerService.findByCityAndByNameStartsWith(new CityId(id), name)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/byLandmark/{landmarkId}/{cityId}/{name}"})
    public Single<List<UmberDeveloper>> findByCityLandmarkAndByNameStartsWith(@PathVariable String cityId, @PathVariable String landmarkId, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return developerService.findByCityLandmarkAndByNameStartsWith(new CityId(cityId), name, new LandmarkId(landmarkId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
}


