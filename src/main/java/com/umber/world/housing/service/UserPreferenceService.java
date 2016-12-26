package com.umber.world.housing.service;

import com.umber.world.housing.model.UmberPreference;

import rx.Single;

public interface UserPreferenceService {

    Single<UmberPreference> findUserPreferenceByUserId (String userId);
    Single<UmberPreference> updteCity(String userId, String cityId);
}
