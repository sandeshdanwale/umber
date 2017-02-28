package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.model.UmberLandmark;
import com.umber.world.housing.service.LandmarkService;

import rx.Single;

@RestController
@RequestMapping("/landmark")
public class LandmarkController {
	
	@Autowired
	private LandmarkService landmarkService;
	
	
	@RequestMapping(value={"/", "", "/featuredLandmarks"})
    public Single<List<UmberLandmark>> featuredLandmarks() {
		return landmarkService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Landmark Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/featuredLandmarksByCity"})
    public Single<List<UmberLandmark>> featuredLandmarksByCity(@RequestParam(value="cityId", required=true) String cityId) {
		return landmarkService.findByFeaturedAndCityId(true, new CityId(cityId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Landmark Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/all"})
    public Single<List<UmberLandmark>> allLandmarks() {
		return landmarkService.findAll()
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Landmark Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/details/{id}"})
    public Single<UmberLandmark> getCityDetails(@PathVariable String id, Pageable pageable) {
		return landmarkService.findDetailsByLandmarkId(new LandmarkId(id), pageable)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Landmark Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/{id}/{name}"})
    public Single<List<UmberLandmark>> findByCityAndByNameStartsWith(@PathVariable String id, @PathVariable String name) {
		if(name.equals("XXXXX")) {
			name = "";
		}
		return landmarkService.findByCityAndByNameStartsWith(new CityId(id), name)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
}



