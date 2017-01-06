package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.City;
import com.umber.world.housing.jackson.CityId;

import java.util.List;

public interface CityRepository extends MongoRepository<City, CityId>, CityRepositoryCustom {

    List<City> findAll();
    City findByCityId(CityId cityId);
    List<City> findByFeatured(Boolean featured);
    
}

