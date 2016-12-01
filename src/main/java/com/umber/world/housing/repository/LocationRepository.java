package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.Location;
import com.umber.world.housing.jackson.LocationId;

import java.util.List;

public interface LocationRepository extends MongoRepository<Location, LocationId> {

    List<Location> findAll();
    Location findByLocationId(LocationId locationId);
    List<Location> findByFeatured(Boolean featured);
    
}

