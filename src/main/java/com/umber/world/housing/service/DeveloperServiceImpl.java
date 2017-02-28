package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.umber.world.housing.domain.City;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.model.UmberDeveloper;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.model.UmberCity;
import com.umber.world.housing.repository.CityRepository;
import com.umber.world.housing.repository.DeveloperRepository;
import com.umber.world.housing.repository.PropertyRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class DeveloperServiceImpl implements DeveloperService {
	
	private DeveloperRepository developerRepository;
	private PropertyRepository propertyRepository;
	private CityRepository cityRepository;

	@Override
	public Single<List<UmberDeveloper>> findAll() {
		Single<List<UmberDeveloper>> umberDevelopers = Single.just(developerRepository.findAll()
				.stream().map(d -> new UmberDeveloper(d))
						.collect(Collectors.toList()));
		return umberDevelopers.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<UmberDeveloper> findDetailsByDeveloperId(DeveloperId developerId, Pageable pageable) {
		return Single.just(developerRepository.findByDeveloperId(developerId))
				.map(d -> {
					List<UmberProperty> properties = propertyRepository.findByDeveloperId(d.getDeveloperId(), pageable)
							.stream().map(p -> {
								return new UmberProperty(p);
							})
							.collect(Collectors.toList());
					return new UmberDeveloper(d, properties);
				})
				.subscribeOn(Schedulers.io());
	}

	@Override
	public Single<UmberDeveloper> findByDeveloperId(DeveloperId developerId) {
		return Single.just(new UmberDeveloper(developerRepository.findByDeveloperId(developerId)));
	}

	@Override
	public Single<List<UmberDeveloper>> findByFeatured(Boolean featured) {
		Single<List<UmberDeveloper>> umberDevelopers = Single.just(developerRepository.findByFeatured(featured)
				.stream().map(d -> new UmberDeveloper(d))
						.collect(Collectors.toList()));
		return umberDevelopers.subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<List<UmberDeveloper>> findByGlobalFeatured(Boolean globalFeatured, Pageable pageable) {
		Single<List<UmberDeveloper>> umberDevelopers = Single.just(developerRepository.findByGlobalFeatured(globalFeatured)
				.stream().map(d -> {
					List<UmberCity> cities = propertyRepository.findByDeveloperDistinctCity(d.getDeveloperId())
								.stream().map(id -> {
									City city = cityRepository.findByCityId(id);
									return new UmberCity(city);
								})
								.collect(Collectors.toList());
					Long cnt = propertyRepository.findCountByDeveloper(d.getDeveloperId());
					List<UmberProperty> properties = propertyRepository.findByDeveloperId(d.getDeveloperId(), pageable)
							.stream().map(p -> {
								return new UmberProperty(p);
							})
							.collect(Collectors.toList());
					return new UmberDeveloper(d, cities, cnt, properties);
				})
						.collect(Collectors.toList()));
		return umberDevelopers.subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<List<UmberDeveloper>> findByFeaturedAndCityId(Boolean featured, CityId cityId) {
		Single<List<UmberDeveloper>> umberDevelopers = Single.just(developerRepository.findByFeaturedAndCityId(featured, cityId)
				.stream().map(d -> new UmberDeveloper(d))
						.collect(Collectors.toList()));
		return umberDevelopers.subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<List<UmberDeveloper>> findByCityAndByNameStartsWith(CityId cityId, String name) {
		Single<List<UmberDeveloper>> umberDeveloper = Single.just(developerRepository.findByCityAndByNameStartsWith(cityId, name)
				.stream().map(d -> new UmberDeveloper(d))
						.collect(Collectors.toList()));
		return umberDeveloper.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<List<UmberDeveloper>> findByCityLandmarkAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId) {
		Single<List<UmberDeveloper>> umberDeveloper = Single.just(developerRepository.findByCityLandmarkAndByNameStartsWith(cityId, name, landmarkId)
				.stream().map(d -> new UmberDeveloper(d))
						.collect(Collectors.toList()));
		return umberDeveloper.subscribeOn(Schedulers.io());
				
	}

}
