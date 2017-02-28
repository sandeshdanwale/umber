package com.umber.world.housing.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.model.UmberLandmark;

import rx.Single;

public interface LandmarkService {
	
	Single<List<UmberLandmark>> findAll();
    Single<UmberLandmark> findByLandmarkId(LandmarkId landmarkId);
    Single<UmberLandmark> findDetailsByLandmarkId(LandmarkId landmarkId, Pageable pegeable);
    Single<List<UmberLandmark>> findByFeatured(Boolean featured);
    Single<List<UmberLandmark>> findByFeaturedAndCityId(Boolean featured, CityId cityId);
    Single<List<UmberLandmark>> findByCityAndByNameStartsWith(CityId cityId, String name);
}

