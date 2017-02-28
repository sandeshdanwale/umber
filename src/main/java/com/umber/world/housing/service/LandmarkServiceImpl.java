package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.model.UmberDeveloper;
import com.umber.world.housing.model.UmberLandmark;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.repository.DeveloperRepository;
import com.umber.world.housing.repository.LandmarkRepository;
import com.umber.world.housing.repository.PropertyRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LandmarkServiceImpl implements LandmarkService {
	
	private LandmarkRepository landmarkRepository;
	private DeveloperRepository developerRepository;
	private PropertyRepository propertyRepository;
	
	@Override
	public Single<List<UmberLandmark>> findAll() {
		Single<List<UmberLandmark>> umberLandmarks = Single.just(landmarkRepository.findAll()
				.stream().map(d -> new UmberLandmark(d))
						.collect(Collectors.toList()));
		return umberLandmarks.subscribeOn(Schedulers.io());
				
	}
	
	@Override
	public Single<UmberLandmark> findDetailsByLandmarkId(LandmarkId landmarkId, Pageable pageable) {
		return Single.just(landmarkRepository.findByLandmarkId(landmarkId))
				.map(l -> {
					List<UmberDeveloper> developers = developerRepository.findByLandmarkId(landmarkId, pageable)
							.stream().map(p -> {
								return new UmberDeveloper(p);
							})
							.collect(Collectors.toList());
					Long count = propertyRepository.findCountByLandmark(landmarkId);
					return new UmberLandmark(l, count, developers);
				})
				.subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<UmberLandmark> findByLandmarkId(LandmarkId landmarkId) {
		return Single.just(new UmberLandmark(landmarkRepository.findByLandmarkId(landmarkId)));
	}

	@Override
	public Single<List<UmberLandmark>> findByFeatured(Boolean featured) {
		Single<List<UmberLandmark>> umberCitys = Single.just(landmarkRepository.findByFeatured(featured)
				.stream().map(d -> new UmberLandmark(d))
						.collect(Collectors.toList()));
		return umberCitys.subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<List<UmberLandmark>> findByFeaturedAndCityId(Boolean featured, CityId cityId) {
		Single<List<UmberLandmark>> umberCitys = Single.just(landmarkRepository.findByFeaturedAndCityId(featured, cityId)
				.stream().map(d -> new UmberLandmark(d))
						.collect(Collectors.toList()));
		return umberCitys.subscribeOn(Schedulers.io());
	}
	
	@Override
	public Single<List<UmberLandmark>> findByCityAndByNameStartsWith(CityId cityId, String name) {
		Single<List<UmberLandmark>> umberCity = Single.just(landmarkRepository.findByCityAndByNameStartsWith(cityId, name)
				.stream().map(d -> new UmberLandmark(d))
						.collect(Collectors.toList()));
		return umberCity.subscribeOn(Schedulers.io());
				
	}

}

