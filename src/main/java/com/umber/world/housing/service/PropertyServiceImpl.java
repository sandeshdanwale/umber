package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.model.UmberConfigs;
import com.umber.world.housing.model.UmberAmenities;
import com.umber.world.housing.domain.Configs;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.domain.aggregate.Config;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.repository.AmenitiesRepository;
import com.umber.world.housing.repository.ConfigsRepository;
import com.umber.world.housing.repository.PropertyRepository;

import lombok.AllArgsConstructor;
import rx.Observable;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PropertyServiceImpl implements PropertyService {
	
	private PropertyRepository propertyRepository;
	private ConfigsRepository configsRepository;
	private AmenitiesRepository amenitiesRepository;

	@Override
	public Single<List<UmberProperty>> findAll() {
		
		Single<List<UmberProperty>> umberProperties = Single.just(propertyRepository.findAll()
				.stream().map(d -> new UmberProperty(d, null, null))
						.collect(Collectors.toList()));
		return umberProperties.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<UmberProperty> findDetailsByPropertyId(PropertyId propertyId) {
		Single<Property> property = Single.just(propertyRepository.findByPropertyId(propertyId));
		Single<Configs> configs = Single.just(configsRepository.findByPropertyId(propertyId));
		return Single.zip(property, configs, (p, c) -> {
			UmberConfigs u = new UmberConfigs(c);
			return new UmberProperty(p, u, null);
		}).subscribeOn(Schedulers.io());
	}

	/*
	@Override
	public Observable<UmberProperty> findAll() {
		
		Observable<UmberProperty> umberProperties = Observable.just(propertyRepository.findAll())
				.flatMapIterable(properties -> properties)
				.flatMap(p -> {
					Observable<UmberConfigs> umberConfigs = Observable.just(configsRepository.findByPropertyId(p.getPropertyId()))
							.flatMapIterable(cfs -> cfs)
							.flatMap(c -> Observable.just(new UmberConfigs(c)));
					Observable<UmberAmenities> umberAmenities = Observable.just(amenitiesRepository.findByPropertyId(p.getPropertyId()))
							.flatMapIterable(cfs -> cfs)
							.flatMap(a -> Observable.just(new UmberAmenities(a)));
					return Observable.zip(umberConfigs, umberAmenities, (c, a) -> {
						return new UmberProperty(p, c, a);
					});//.collect(Converter.toList());
							
				});
		return umberProperties;
	}
	*/
	@Override
	public Single<UmberProperty> findByPropertyId(PropertyId propertyId) {
		return Single.just(new UmberProperty(propertyRepository.findByPropertyId(propertyId), null, null));
	}

	@Override
	public Single<List<UmberProperty>> findByFeatured(Boolean featured) {
		Single<List<UmberProperty>> umberProperties = Single.just(propertyRepository.findByFeatured(featured)
				.stream().map(d -> new UmberProperty(d, null, null))
						.collect(Collectors.toList()));
		return umberProperties.subscribeOn(Schedulers.io());
	}

}

