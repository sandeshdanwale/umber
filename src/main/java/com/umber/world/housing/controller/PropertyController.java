package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.service.PropertyService;

import rx.Single;

@RestController
@RequestMapping("/property")
public class PropertyController {
	
	@Autowired
	private PropertyService propertyService;
	
	@RequestMapping(value={"/", "", "/featuredProperties"})
    public Single<List<UmberProperty>> featuredProperties() {
		return propertyService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/featuredPropertiesByCity"})
    public Single<List<UmberProperty>> featuredPropertiesByCity(@RequestParam(value="cityId", required=true) String cityId) {
		return propertyService.findByFeaturedAndCity(true, new CityId(cityId))
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
	
	@RequestMapping(value={"/search/{id}/{name}"})
    public Single<List<UmberProperty>> findByIdStartsWith(@PathVariable String id, @PathVariable String name) {
		return propertyService.findByCityAndByNameStartsWith(new CityId(id), name)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
}

