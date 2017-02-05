package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.Developer;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.DeveloperId;

public interface DeveloperRepository extends MongoRepository<Developer, DeveloperId>, DeveloperRepositoryCustom {

    List<Developer> findAll();
    Developer findByDeveloperId(DeveloperId developerId);
    List<Developer> findByFeatured(Boolean featured);
    List<Developer> findByGlobalFeatured(Boolean globalFeatured);
}


