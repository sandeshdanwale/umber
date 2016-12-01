package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.jackson.LocationId;
import com.umber.world.housing.model.UmberLocation;
import com.umber.world.housing.repository.LocationRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LocationServiceImpl implements LocationService {
	
	private LocationRepository locationRepository;

	@Override
	public Single<List<UmberLocation>> findAll() {
		Single<List<UmberLocation>> umberLocations = Single.just(locationRepository.findAll()
				.stream().map(d -> new UmberLocation(d))
						.collect(Collectors.toList()));
		return umberLocations.subscribeOn(Schedulers.io());
				
	}

	@Override
	public Single<UmberLocation> findByLocationId(LocationId locationId) {
		return Single.just(new UmberLocation(locationRepository.findByLocationId(locationId)));
	}

	@Override
	public Single<List<UmberLocation>> findByFeatured(Boolean featured) {
		Single<List<UmberLocation>> umberLocations = Single.just(locationRepository.findByFeatured(featured)
				.stream().map(d -> new UmberLocation(d))
						.collect(Collectors.toList()));
		return umberLocations.subscribeOn(Schedulers.io());
	}

}

