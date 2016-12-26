package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.model.UmberDeveloper;
import com.umber.world.housing.repository.DeveloperRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class DeveloperServiceImpl implements DeveloperService {
	
	private DeveloperRepository developerRepository;

	@Override
	public Single<List<UmberDeveloper>> findAll() {
		Single<List<UmberDeveloper>> umberDevelopers = Single.just(developerRepository.findAll()
				.stream().map(d -> new UmberDeveloper(d))
						.collect(Collectors.toList()));
		return umberDevelopers.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<UmberDeveloper> findDetailsByDeveloperId(DeveloperId developerId) {
		return Single.just(developerRepository.findByDeveloperId(developerId))
				.map(l -> new UmberDeveloper(l))
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
	public Single<List<UmberDeveloper>> findByFeaturedAndCity(Boolean featured, CityId cityId) {
		Single<List<UmberDeveloper>> umberDevelopers = Single.just(developerRepository.findByFeatured(featured)
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

}
