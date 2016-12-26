package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.umber.world.housing.domain.UserPreference;
import com.umber.world.housing.jackson.UserId;

/**
 * User Preference Repository.
 */
public interface UserPreferenceRepository extends MongoRepository<UserPreference, Long>, UserPreferenceRepositoryCustom {

    UserPreference findByUserId(UserId userId);
}


