package com.umber.world.housing.service;

import com.umber.world.housing.model.FilterSaveRequest;
import com.umber.world.housing.model.UmberPreference;

import rx.Single;

public interface UserPreferenceService {

    Single<UmberPreference> findUserPreferenceByUserId (String userId);
    Single<UmberPreference> updateCity(String userId, String cityId);
    Single<UmberPreference> updateFilter(String userId, FilterSaveRequest fileSaveRequest);
}
