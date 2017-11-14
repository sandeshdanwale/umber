package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.service.PropertyService;

import rx.Single;

@RestController
@RequestMapping("/property")
public class PropertyController {
	
	@Autowired
	private PropertyService propertyService;
	
	@RequestMapping(value={"/", "", "/allFeaturedProperties"})
    public Single<List<UmberProperty>> featuredProperties() {
		return propertyService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/featuredPropertiesByCity"})
    public Single<List<UmberProperty>> featuredPropertiesByCity(@RequestParam(value="cityId", required=true) String cityId) {
		return propertyService.findByFeaturedAndCityId(true, new CityId(cityId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/globalFeaturedProperties"})
    public Single<List<UmberProperty>> globalfeaturedProperties() {
		return propertyService.findByGlobalFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }

	@RequestMapping(value={"/all"})
    public Single<List<UmberProperty>> findAll() {
		return propertyService.findAll()
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/details/{id}"})
    public Single<UmberProperty> getPropertyDetails(@PathVariable String id) {
		return propertyService.findDetailsByPropertyId(new PropertyId(id))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/details/all/{id}"})
    public Single<UmberProperty> getAllPropertyDetails(@PathVariable String id) {
		return propertyService.findAllDetailsByPropertyId(new PropertyId(id))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/{id}/{name}"})
    public Single<List<UmberProperty>> findByIdStartsWith(@PathVariable String id, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return propertyService.findByCityAndByNameStartsWith(new CityId(id), name)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/details/{id}/{name}"})
    public Single<List<UmberProperty>> findByCityAndByNameStartsWithWithDetails(@PathVariable String id, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return propertyService.findByCityAndByNameStartsWithWithDetails(new CityId(id), name)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/byLandmark/details/{landmarkId}/{cityId}/{name}"})
    public Single<List<UmberProperty>> findByLandmarkAndIdStartsWithWithDetails(@PathVariable String cityId, @PathVariable String landmarkId, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return propertyService.findByCityLandmarkAndByNameStartsWithWithDetails(new CityId(cityId), name, new LandmarkId(landmarkId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/byLandmark/{landmarkId}/{cityId}/{name}"})
    public Single<List<UmberProperty>> findByLandmarkAndIdStartsWith(@PathVariable String cityId, @PathVariable String landmarkId, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return propertyService.findByCityLandmarkAndByNameStartsWith(new CityId(cityId), name, new LandmarkId(landmarkId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/nearByProperties/{landmarkId}/{cityId}"})
    public Single<List<UmberProperty>> findNearByPtoperties(@PathVariable String cityId, @PathVariable String landmarkId, Pageable pageable) {
		return propertyService.findNearByPtoperties(new LandmarkId(landmarkId), new CityId(cityId), pageable)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/byDeveloper/{developerId}/{cityId}/{name}"})
    public Single<List<UmberProperty>> findByDeveloperAndIdStartsWith(@PathVariable String cityId, @PathVariable String developerId, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return propertyService.findByCityDeveloperAndByNameStartsWith(new CityId(cityId), name, new DeveloperId(developerId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/byDeveloper/details/{developerId}/{cityId}/{name}"})
    public Single<List<UmberProperty>> findByDeveloperAndIdStartsWithWithDetails(@PathVariable String cityId, @PathVariable String developerId, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return propertyService.findByCityDeveloperAndByNameStartsWithWithDetails(new CityId(cityId), name, new DeveloperId(developerId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/byLandmarkAndDeveloper/{landmarkId}/{developerId}/{cityId}/{name}"})
    public Single<List<UmberProperty>> findByLandmarkDeveloperAndIdStartsWith(@PathVariable String cityId, @PathVariable String landmarkId, @PathVariable String developerId, @PathVariable String name) {
		if (name.equals("XXXXX")) {
			name = "";
		}
		return propertyService.findByCityLandmarkDeveloperAndByNameStartsWith(new CityId(cityId), name, new LandmarkId(landmarkId), new DeveloperId(developerId))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
}

