package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.umber.world.housing.domain.Location;
import java.util.List;

/**
 * Location Repository.
 */
public interface LocationRepository extends MongoRepository<Location, Long> {

    List<Location> findAll();
}

