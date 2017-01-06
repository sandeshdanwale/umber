package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.model.UmberCity;
import com.umber.world.housing.repository.CityRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class CityServiceImpl implements CityService {
	
	private CityRepository CityRepository;

	@Override
	public Single<List<UmberCity>> findAll() {
		Single<List<UmberCity>> umberCitys = Single.just(CityRepository.findAll()
				.stream().map(d -> new UmberCity(d))
						.collect(Collectors.toList()));
		return umberCitys.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<UmberCity> findDetailsByCityId(CityId CityId) {
		return Single.just(CityRepository.findByCityId(CityId))
				.map(l -> new UmberCity(l))
				.subscribeOn(Schedulers.io());
	}

	@Override
	public Single<UmberCity> findByCityId(CityId CityId) {
		return Single.just(new UmberCity(CityRepository.findByCityId(CityId)));
	}

	@Override
	public Single<List<UmberCity>> findByFeatured(Boolean featured) {
		Single<List<UmberCity>> umberCitys = Single.just(CityRepository.findByFeatured(featured)
				.stream().map(d -> new UmberCity(d))
						.collect(Collectors.toList()));
		return umberCitys.subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<List<UmberCity>> findByNameStartsWith(String name) {
		Single<List<UmberCity>> umberCity = Single.just(CityRepository.findByNameStartsWith(name)
				.stream().map(d -> new UmberCity(d))
						.collect(Collectors.toList()));
		return umberCity.subscribeOn(Schedulers.io());
				
	}
	
}

