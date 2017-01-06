package com.umber.world.housing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.model.UmberCity;
import com.umber.world.housing.service.CityService;

import rx.Single;

@RestController
@RequestMapping("/city")
public class CityController {
	
	@Autowired
	private CityService cityService;
	
	
	@RequestMapping(value={"/", "", "/featuredCities"})
    public Single<List<UmberCity>> featuredCities() {
		return cityService.findByFeatured(true)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: City Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/all"})
    public Single<List<UmberCity>> allCities() {
		return cityService.findAll()
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: City Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/details/{id}"})
    public Single<UmberCity> getCityDetails(@PathVariable String id) {
		return cityService.findDetailsByCityId(new CityId(id))
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: City Service API {} failed :: {} ");
                    return null;
                });
    }
	
	@RequestMapping(value={"/search/{name}"})
    public Single<List<UmberCity>> findByIdStartsWith(@PathVariable String name) {
		return cityService.findByNameStartsWith(name)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: City Service API {} failed :: {} ");
                    return null;
                });
    }
}



