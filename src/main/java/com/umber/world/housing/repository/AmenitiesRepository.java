package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.Amenities;

/**
 * Location Repository.
 */
public interface AmenitiesRepository extends MongoRepository<Amenities, String> {

    List<Amenities> findByPropertyId(String PropertyId);
    
}



