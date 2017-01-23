package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.jackson.PropertyId;

public interface PropertyRepository extends MongoRepository<Property, PropertyId>, PropertyRepositoryCustom {

    List<Property> findAll();
    Property findByPropertyId(PropertyId propertyId);
    List<Property> findByFeatured(Boolean featured);
    List<Property> findByGlobalFeatured(Boolean globalFeatured);
    
}

