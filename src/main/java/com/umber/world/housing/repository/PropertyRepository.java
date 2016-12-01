package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.PropertyId;

public interface PropertyRepository extends MongoRepository<Property, PropertyId> {

    List<Property> findAll();
    Property findByPropertyId(PropertyId propertyId);
    List<Property> findByFeatured(Boolean featured);
    
}

