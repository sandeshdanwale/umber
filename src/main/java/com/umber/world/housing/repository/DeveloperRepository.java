package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.aggregate.DeveloperId;
import com.umber.world.housing.domain.Developer;
import com.umber.world.housing.domain.Property;

public interface DeveloperRepository extends MongoRepository<Developer, DeveloperId> {

    List<Developer> findAll();
    Property findByDeveloperId(DeveloperId developerId);
    
}


