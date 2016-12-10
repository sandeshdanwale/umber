package com.umber.world.housing.service;

import java.util.List;

import com.umber.world.housing.model.UmberDeveloperWords;

import rx.Single;

public interface DeveloperWordsService {
	
    Single<List<UmberDeveloperWords>> findByDeveloperIdStartsWith(String id);
}

