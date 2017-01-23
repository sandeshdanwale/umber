package com.umber.world.housing.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;

import rx.Single;


public interface PropertyService {
	
	Single<List<UmberProperty>> findAll();
    Single<UmberProperty> findByPropertyId(PropertyId propertyId);
    Single<UmberProperty> findDetailsByPropertyId(PropertyId propertyId);
    Single<List<UmberProperty>> findByFeatured(Boolean featured);
    Single<List<UmberProperty>> findByGlobalFeatured(Boolean globalFeatured);
    Single<List<UmberProperty>> findByFeaturedAndCityId(Boolean featured, CityId cityId);
    Single<List<UmberProperty>> findByCityAndByNameStartsWith(CityId cityId, String name);
    Single<List<UmberProperty>> findByCityLandmarkAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId);
    Single<List<UmberProperty>> findByCityDeveloperAndByNameStartsWith(CityId cityId, String name, DeveloperId developerId);
    Single<List<UmberProperty>> findByCityLandmarkDeveloperAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId, DeveloperId developerId);
    Single<List<UmberProperty>> findNearByPtoperties(LandmarkId landmarkId, CityId cityId, Pageable pageable);
}

