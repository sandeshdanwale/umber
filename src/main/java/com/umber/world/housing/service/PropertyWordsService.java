package com.umber.world.housing.service;

import java.util.List;

import com.umber.world.housing.model.UmberPropertyWords;

import rx.Single;

public interface PropertyWordsService {
	
    Single<List<UmberPropertyWords>> findByDeveloperIdStartsWith(String id);
}


