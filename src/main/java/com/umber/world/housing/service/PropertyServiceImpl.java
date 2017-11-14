package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.umber.world.housing.model.UmberAmenities;
import com.umber.world.housing.model.UmberConfigs;
import com.umber.world.housing.model.UmberLandmark;
import com.umber.world.housing.domain.Configs;
import com.umber.world.housing.domain.Developer;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.domain.Amenities;
import com.umber.world.housing.domain.City;
import com.umber.world.housing.domain.aggregate.Address;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.repository.AmenitiesRepository;
import com.umber.world.housing.repository.CityRepository;
import com.umber.world.housing.repository.ConfigsRepository;
import com.umber.world.housing.repository.DeveloperRepository;
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
	private DeveloperRepository developerRepository;
	private CityRepository cityRepository;

	@Override
	public Single<List<UmberProperty>> findAll() {
		
		Single<List<UmberProperty>> umberProperties = Single.just(propertyRepository.findAll()
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperties.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<UmberProperty> findDetailsByPropertyId(PropertyId propertyId) {
		Single<Property> property = Single.just(propertyRepository.findByPropertyId(propertyId));
		Single<Configs> configs = Single.just(configsRepository.findByPropertyId(propertyId));
		return Single.zip(property, configs, (p, c) -> {
			UmberConfigs uc = null;
			String cityName = "";
			if (c != null) {
				uc = new UmberConfigs(c);
			}
			
			List<CityId> cityIds = p.getAddresses().stream().filter(ad -> {
						return ad.getType().toString().equals("HOME");
					})
					.map(ad -> {
						return ad.getCityId();
					})
					.collect(Collectors.toList());
			Developer developer = developerRepository.findByDeveloperId(p.getDeveloperId());
			if (!cityIds.isEmpty()) {
				City city = cityRepository.findByCityId(new CityId(cityIds.get(0).getRegistrationId()));
				cityName = city.getName();
			}
			return new UmberProperty(p, uc, null, developer.getName(), cityName);
		}).subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<UmberProperty> findAllDetailsByPropertyId(PropertyId propertyId) {
		Single<Property> property = Single.just(propertyRepository.findByPropertyId(propertyId));
		Single<Configs> configs = Single.just(configsRepository.findByPropertyId(propertyId));
		Single<Amenities> amenities = Single.just(amenitiesRepository.findByPropertyId(propertyId));
		return Single.zip(property, configs, amenities, (p, c, a) -> {
			UmberConfigs uc = null;
			UmberAmenities ua = null;
			String cityName = "";
			if (c != null) {
				uc = new UmberConfigs(c);
			}
			
			if (a != null) {
				ua = new UmberAmenities(a);
			}
			
			List<CityId> cityIds = p.getAddresses().stream().filter(ad -> {
						return ad.getType().toString().equals("HOME");
					})
					.map(ad -> {
						return ad.getCityId();
					})
					.collect(Collectors.toList());
			Developer developer = developerRepository.findByDeveloperId(p.getDeveloperId());
			if (!cityIds.isEmpty()) {
				City city = cityRepository.findByCityId(new CityId(cityIds.get(0).getRegistrationId()));
				cityName = city.getName();
			}
			return new UmberProperty(p, uc, ua, developer.getName(), cityName);
		}).subscribeOn(Schedulers.io());
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
	/*
	@Override
	public Single<List<UmberProperty>> findByGlobalFeatured(Boolean featured) {
		Single<List<UmberProperty>> umberProperties = Single.just(propertyRepository.findByFeatured(featured)
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperties.subscribeOn(Schedulers.io());
	}
*/
	@Override
	public Single<List<UmberProperty>> findByGlobalFeatured(Boolean globalFeatured) {
		Single<List<UmberProperty>> UmberProperties = Single.just(propertyRepository.findByGlobalFeatured(globalFeatured)
		.stream().map(p -> {
			UmberConfigs u = null;
			String cityName = "";
			Configs c = configsRepository.findByPropertyId(p.propertyId);
			if (c != null) {
				u = new UmberConfigs(c);
			}
			List<CityId> cityIds = p.getAddresses().stream().filter(a -> {
						return a.getType().toString().equals("HOME");
					})
					.map(a -> {
						return a.getCityId();
					})
					.collect(Collectors.toList());
			Developer developer = developerRepository.findByDeveloperId(p.getDeveloperId());
			if (!cityIds.isEmpty()) {
				City city = cityRepository.findByCityId(new CityId(cityIds.get(0).getRegistrationId()));
				cityName = city.getName();
			}
			return new UmberProperty(p, u, null, developer.getName(), cityName);
		})
		.collect(Collectors.toList()));
		return UmberProperties;
	}
	
	@Override
	public Single<List<UmberProperty>> findByCityAndByNameStartsWithWithDetails(CityId cityId, String name) {
		Single<List<UmberProperty>> UmberProperties = Single.just(propertyRepository.findByCityAndByNameStartsWith(cityId, name)
		.stream().map(p -> {
			UmberConfigs u = null;
			String cityName = "";
			Configs c = configsRepository.findByPropertyId(p.propertyId);
			if (c != null) {
				u = new UmberConfigs(c);
			}
			List<CityId> cityIds = p.getAddresses().stream().filter(a -> {
						return a.getType().toString().equals("HOME");
					})
					.map(a -> {
						return a.getCityId();
					})
					.collect(Collectors.toList());
			Developer developer = developerRepository.findByDeveloperId(p.getDeveloperId());
			if (!cityIds.isEmpty()) {
				City city = cityRepository.findByCityId(new CityId(cityIds.get(0).getRegistrationId()));
				cityName = city.getName();
			}
			return new UmberProperty(p, u, null, developer.getName(), cityName);
		})
		.collect(Collectors.toList()));
		return UmberProperties;
	}
	
	@Override
	public Single<List<UmberProperty>> findByFeaturedAndCityId(Boolean featured, CityId cityId) {
		Single<List<UmberProperty>> umberProperties = Single.just(propertyRepository.findByFeaturedAndCityId(featured, cityId)
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperties.subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<List<UmberProperty>> findByCityAndByNameStartsWith(CityId cityId, String name) {
		Single<List<UmberProperty>> umberProperty = Single.just(propertyRepository.findByCityAndByNameStartsWith(cityId, name)
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperty.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<List<UmberProperty>> findByCityLandmarkAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId) {
		Single<List<UmberProperty>> umberProperty = Single.just(propertyRepository.findByCityLandmarkAndByNameStartsWith(cityId, name, landmarkId)
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperty.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<List<UmberProperty>> findByCityLandmarkAndByNameStartsWithWithDetails(CityId cityId, String name, LandmarkId landmarkId) {
		Single<List<UmberProperty>> umberProperty = Single.just(propertyRepository.findByCityLandmarkAndByNameStartsWith(cityId, name, landmarkId)
				.stream().map(p -> {
					UmberConfigs u = null;
					String cityName = "";
					Configs c = configsRepository.findByPropertyId(p.propertyId);
					if (c != null) {
						u = new UmberConfigs(c);
					}
					List<CityId> cityIds = p.getAddresses().stream().filter(a -> {
								return a.getType().toString().equals("HOME");
							})
							.map(a -> {
								return a.getCityId();
							})
							.collect(Collectors.toList());
					Developer developer = developerRepository.findByDeveloperId(p.getDeveloperId());
					if (!cityIds.isEmpty()) {
						City city = cityRepository.findByCityId(new CityId(cityIds.get(0).getRegistrationId()));
						cityName = city.getName();
					}
					return new UmberProperty(p, u, null, developer.getName(), cityName);
				})
				.collect(Collectors.toList()));
		return umberProperty.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<List<UmberProperty>> findByCityDeveloperAndByNameStartsWith(CityId cityId, String name, DeveloperId developerId) {
		Single<List<UmberProperty>> umberProperty = Single.just(propertyRepository.findByCityDeveloperAndByNameStartsWith(cityId, name, developerId)
				.stream().map(p -> {
					UmberConfigs u = null;
					String cityName = "";
					Configs c = configsRepository.findByPropertyId(p.propertyId);
					if (c != null) {
						u = new UmberConfigs(c);
					}
					List<CityId> cityIds = p.getAddresses().stream().filter(a -> {
								return a.getType().toString().equals("HOME");
							})
							.map(a -> {
								return a.getCityId();
							})
							.collect(Collectors.toList());
					Developer developer = developerRepository.findByDeveloperId(p.getDeveloperId());
					if (!cityIds.isEmpty()) {
						City city = cityRepository.findByCityId(new CityId(cityIds.get(0).getRegistrationId()));
						cityName = city.getName();
					}
					return new UmberProperty(p, u, null, developer.getName(), cityName);
				})
				.collect(Collectors.toList()));
		return umberProperty.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<List<UmberProperty>> findByCityDeveloperAndByNameStartsWithWithDetails(CityId cityId, String name, DeveloperId developerId) {
		Single<List<UmberProperty>> umberProperty = Single.just(propertyRepository.findByCityDeveloperAndByNameStartsWith(cityId, name, developerId)
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperty.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<List<UmberProperty>> findByCityLandmarkDeveloperAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId, DeveloperId developerId) {
		Single<List<UmberProperty>> umberProperty = Single.just(propertyRepository.findByCityLandmarkDeveloperAndByNameStartsWith(cityId, name, landmarkId, developerId)
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperty.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<List<UmberProperty>> findNearByPtoperties(LandmarkId landmarkId, CityId cityId, Pageable pageable) {
		Single<List<UmberProperty>> umberProperty = Single.just(propertyRepository.findNearByPtoperties(landmarkId, cityId, pageable)
				.stream().map(d -> new UmberProperty(d))
						.collect(Collectors.toList()));
		return umberProperty.subscribeOn(Schedulers.io());
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

}

