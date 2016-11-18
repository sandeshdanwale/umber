package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.Configs;
import com.umber.world.housing.domain.aggregate.PropertyId;

/**
 * Location Repository.
 */
public interface ConfigsRepository extends MongoRepository<Configs, String> {

    List<Configs> findByPropertyId(PropertyId propertyId);
    
}


