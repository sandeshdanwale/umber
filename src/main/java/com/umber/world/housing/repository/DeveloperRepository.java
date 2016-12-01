package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.aggregate.DeveloperId;
import com.umber.world.housing.domain.Developer;

public interface DeveloperRepository extends MongoRepository<Developer, DeveloperId> {

    List<Developer> findAll();
    Developer findByDeveloperId(DeveloperId developerId);
    List<Developer> findByFeatured(Boolean featured);
    
}


