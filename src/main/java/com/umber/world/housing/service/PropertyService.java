package com.umber.world.housing.service;

import java.util.List;

import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;
import rx.Single;


public interface PropertyService {
	
	Single<List<UmberProperty>> findAll();
    Single<UmberProperty> findByPropertyId(PropertyId propertyId);
    Single<UmberProperty> findDetailsByPropertyId(PropertyId propertyId);
    Single<List<UmberProperty>> findByFeatured(Boolean featured);
    
}

