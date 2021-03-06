package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.umber.world.housing.domain.Developer;
import com.umber.world.housing.domain.Landmark;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;

public interface DeveloperRepositoryCustom {

	List<Developer> findByCityAndByNameStartsWith(CityId cityId, String name);
	List<Developer> findByFeaturedAndCityId(Boolean featured, CityId cityId);
	List<Developer> findByCityLandmarkAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId);
	List<Developer> findByLandmarkId(LandmarkId landmarkId, Pageable pageable);
	long findCountByLandmark(LandmarkId landmarkId);
}




