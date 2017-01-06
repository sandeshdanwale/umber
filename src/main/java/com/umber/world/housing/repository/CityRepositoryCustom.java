package com.umber.world.housing.repository;

import java.util.List;

import com.umber.world.housing.domain.City;

public interface CityRepositoryCustom {

	List<City> findByNameStartsWith(String name);
    
}




