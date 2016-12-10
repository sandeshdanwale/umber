package com.umber.world.housing.service;

import java.util.List;

import com.umber.world.housing.model.UmberLocationWords;

import rx.Single;

public interface LocationWordsService {
	
    Single<List<UmberLocationWords>> findByDeveloperIdStartsWith(String id);
}


