package com.umber.world.housing.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.model.UmberDeveloper;

import rx.Single;

public interface DeveloperService {
	
	Single<List<UmberDeveloper>> findAll();
    Single<UmberDeveloper> findByDeveloperId(DeveloperId developerId);
    Single<UmberDeveloper> findDetailsByDeveloperId(DeveloperId developerId, Pageable pageable);
    Single<List<UmberDeveloper>> findByFeatured(Boolean featured);
    Single<List<UmberDeveloper>> findByGlobalFeatured(Boolean globalFeatured, Pageable pageable);
    Single<List<UmberDeveloper>> findByFeaturedAndCityId(Boolean featured, CityId cityId);
    Single<List<UmberDeveloper>> findByCityAndByNameStartsWith(CityId cityId, String name);
    Single<List<UmberDeveloper>> findByCityLandmarkAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId);
    
}
