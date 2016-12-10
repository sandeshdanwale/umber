package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.Configs;
import com.umber.world.housing.jackson.PropertyId;

/**
 * Location Repository.
 */
public interface ConfigsRepository extends MongoRepository<Configs, String> {

    Configs findByPropertyId(PropertyId propertyId);
    
}


