package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.umber.world.housing.domain.Landmark;
import com.umber.world.housing.jackson.LandmarkId;

import java.util.List;

public interface LandmarkRepository extends MongoRepository<Landmark, LandmarkId>, LandmarkRepositoryCustom {

    List<Landmark> findAll();
    Landmark findByLandmarkId(LandmarkId landmarkId);
    List<Landmark> findByFeatured(Boolean featured);
    
}

