package com.umber.world.housing.service;

import java.util.List;

import com.umber.world.housing.domain.aggregate.DeveloperId;
import com.umber.world.housing.model.UmberDeveloper;

import rx.Single;

public interface DeveloperService {
	
	Single<List<UmberDeveloper>> findAll();
    Single<UmberDeveloper> findByDeveloperId(DeveloperId developerId);
    Single<UmberDeveloper> findDetailsByDeveloperId(DeveloperId developerId);
    Single<List<UmberDeveloper>> findByFeatured(Boolean featured);
}
