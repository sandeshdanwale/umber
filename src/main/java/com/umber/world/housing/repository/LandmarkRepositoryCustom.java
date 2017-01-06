package com.umber.world.housing.repository;

import java.util.List;
import com.umber.world.housing.domain.Landmark;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;

public interface LandmarkRepositoryCustom {

	List<Landmark> findByCityAndByNameStartsWith(CityId cityId, String name);
	List<Landmark> findByFeaturedAndCityId(Boolean featured, CityId cityId);
    
}