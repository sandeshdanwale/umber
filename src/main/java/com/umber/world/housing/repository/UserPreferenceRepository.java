package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.umber.world.housing.domain.UserPreference;

/**
 * Location Repository.
 */
public interface UserPreferenceRepository extends MongoRepository<UserPreference, Long> {

    UserPreference findByUserId(String userId);
}


