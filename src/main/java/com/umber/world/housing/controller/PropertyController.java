package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

