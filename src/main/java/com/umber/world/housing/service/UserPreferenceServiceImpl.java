package com.umber.world.housing.service;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.UserId;
import com.umber.world.housing.model.FilterSaveRequest;
import com.umber.world.housing.model.UmberPreference;
import com.umber.world.housing.repository.CityRepository;
import com.umber.world.housing.repository.UserPreferenceRepository;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserPreferenceServiceImpl implements UserPreferenceService {
	

    private CityRepository CityRepository;
    private UserPreferenceRepository userPreferenceRepository;
    
    @Override
    public Single<UmberPreference> findUserPreferenceByUserId(String userId) {
	  
		return Single.just(userPreferenceRepository.findByUserId(new UserId(userId)))
				.flatMap(userPreference -> {
					String registrationId = userPreference.cityId.getRegistrationId();
					CityId CityId = new CityId(registrationId);
					return Single.just(CityRepository.findByCityId(CityId))
							.map(city -> new UmberPreference(userPreference, city));
				}).subscribeOn(Schedulers.io());
		
    }
    
    @Override
    public Single<UmberPreference> updateCity(String userId, String cityId) {
	  
		return Single.just(userPreferenceRepository.updateCity(new UserId(userId), new CityId(cityId)))
				.flatMap(userPreference -> {
					String registrationId = userPreference.cityId.getRegistrationId();
					CityId CityId = new CityId(registrationId);
					return Single.just(CityRepository.findByCityId(CityId))
							.map(city -> new UmberPreference(userPreference, city));
				}).subscribeOn(Schedulers.io());
		
    }
    
    @Override
    public Single<UmberPreference> updateFilter(String userId, FilterSaveRequest fileSaveRequest) {
	  
		return Single.just(userPreferenceRepository.updateFilter(new UserId(userId), fileSaveRequest))
				.flatMap(userPreference -> {
					String registrationId = userPreference.cityId.getRegistrationId();
					CityId CityId = new CityId(registrationId);
					return Single.just(CityRepository.findByCityId(CityId))
							.map(city -> new UmberPreference(userPreference, city));
				}).subscribeOn(Schedulers.io());
		
    }
    
}

