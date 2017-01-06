package com.umber.world.housing.service;

import java.util.List;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.model.UmberCity;

import rx.Single;

public interface CityService {
	
	Single<List<UmberCity>> findAll();
    Single<UmberCity> findByCityId(CityId cityId);
    Single<UmberCity> findDetailsByCityId(CityId cityId);
    Single<List<UmberCity>> findByFeatured(Boolean featured);
    Single<List<UmberCity>> findByNameStartsWith(String name);
}

