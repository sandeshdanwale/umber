package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.service.PropertyService;

import rx.Observable;
import rx.Single;

@RestController
@RequestMapping("/property")
public class PropertyController {
	
	@Autowired
	private PropertyService propertyService;
	
	
	@RequestMapping(value={"/", ""})
    public Single<List<UmberProperty>> featuredProperties() {
		return propertyService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/featuredProperties"})
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
}

