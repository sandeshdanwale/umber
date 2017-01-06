package com.umber.world.housing.repository;

import java.util.List;

import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;

public interface PropertyRepositoryCustom {

	List<Property> findByCityAndByNameStartsWith(CityId cityId, String name);
	List<Property> findByFeaturedAndCityId(Boolean featured, CityId cityId);
	List<Property> findByCityLandmarkAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId);
	List<Property> findByCityLandmarkDeveloperAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId, DeveloperId developerId);
	List<Property> findByCityDeveloperAndByNameStartsWith(CityId cityId, String name, DeveloperId developerId);
    
}