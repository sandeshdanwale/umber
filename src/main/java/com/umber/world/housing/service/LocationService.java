package com.umber.world.housing.service;

import java.util.List;

import com.umber.world.housing.jackson.LocationId;
import com.umber.world.housing.model.UmberLocation;

import rx.Single;

public interface LocationService {
	
	Single<List<UmberLocation>> findAll();
    Single<UmberLocation> findByLocationId(LocationId locationId);
    Single<List<UmberLocation>> findByFeatured(Boolean featured);
}

