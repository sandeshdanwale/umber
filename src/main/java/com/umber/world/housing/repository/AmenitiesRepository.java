package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.Amenities;
import com.umber.world.housing.jackson.PropertyId;

/**
 * Amenities Repository
 */

public interface AmenitiesRepository extends MongoRepository<Amenities, String> {

    Amenities findByPropertyId(PropertyId propertyId);
    
}



