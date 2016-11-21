package com.umber.world.housing.service;

import com.umber.world.housing.model.UmberPreference;

import rx.Observable;
import rx.Single;

public interface UserPreferenceService {

    UmberPreference findUserPreferenceById (String userId);
    
}
