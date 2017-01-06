package com.umber.world.housing.repository;

import com.umber.world.housing.domain.UserPreference;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.UserId;

public interface UserPreferenceRepositoryCustom {

	UserPreference updateCity(UserId userId, CityId cityId);
    
}
