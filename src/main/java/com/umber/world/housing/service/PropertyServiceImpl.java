package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.repository.PropertyRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PropertyServiceImpl implements PropertyService {
	
	private PropertyRepository propertyRepository;

	@Override
	public Single<List<UmberProperty>> findAll() {
		
		Single<List<UmberProperty>> umberProperties = Single.just(propertyRepository.findAll()
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperties.subscribeOn(Schedulers.io());
				
	}

	@Override
	public Single<UmberProperty> findByPropertyId(PropertyId propertyId) {
		return Single.just(new UmberProperty(propertyRepository.findByPropertyId(propertyId)));
	}

	@Override
	public Single<List<UmberProperty>> findByFeatured(Boolean featured) {
		Single<List<UmberProperty>> umberProperties = Single.just(propertyRepository.findByFeatured(featured)
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperties.subscribeOn(Schedulers.io());
	}

}

