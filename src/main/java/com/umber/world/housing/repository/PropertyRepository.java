package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.aggregate.PropertyId;
import com.umber.world.housing.domain.Property;

public interface PropertyRepository extends MongoRepository<Property, PropertyId> {

    List<Property> findAll();
    Property findByPropertyId(PropertyId propertyId);
    
}

