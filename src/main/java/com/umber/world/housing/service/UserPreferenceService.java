package com.umber.world.housing.service;

import com.umber.world.housing.model.UmberPreference;

import rx.Single;

public interface UserPreferenceService {

    Single<UmberPreference> findUserPreferenceById (String userId);
    
}
