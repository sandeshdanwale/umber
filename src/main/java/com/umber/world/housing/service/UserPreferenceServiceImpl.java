package com.umber.world.housing.service;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.domain.Location;
import com.umber.world.housing.jackson.LocationId;
import com.umber.world.housing.model.UmberPreference;
import com.umber.world.housing.repository.LocationRepository;
import com.umber.world.housing.repository.UserPreferenceRepository;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserPreferenceServiceImpl implements UserPreferenceService {
	

    private LocationRepository locationRepository;
    private UserPreferenceRepository userPreferenceRepository;
    
  @Override
    public Single<UmberPreference> findUserPreferenceById(String userId) {
	  
		Single<List<Location>> locations = Single.just(locationRepository.findAll());
		Single<List<Location>> primaryLocations = locations.map(l -> l.stream()
				.filter(ls -> {
					Boolean res = ls.getPrimary();
					return res == true;
				})
				.collect(Collectors.toList()));
		
		Single<List<Location>> secondaryLocations = locations.map(l -> l.stream()
				.filter(ls -> {
					Boolean res = ls.getPrimary();
					return res == false;
				})
				.collect(Collectors.toList()));
		
		Single<Location> selectedLocation = Single.just(userPreferenceRepository.findByUserId(userId))
				.flatMap(userPreference -> {
					String registrationId = userPreference.selectedLocation.getRegistrationId();
					LocationId locationId = new LocationId(registrationId);
					return Single.just(locationRepository.findByLocationId(locationId));
				});
		
		return Single.zip(selectedLocation, primaryLocations, secondaryLocations, (sec, p, s) -> {
			return new UmberPreference(userId, p, s, sec);
		}).subscribeOn(Schedulers.io());
		
    }
  /*
    public UmberPreference findUserPreferenceById(String userId) {
	    List<Location> locations = locationRepository.findAll();
		userId = new String("12345");
		UserPreference userPreference = userPreferenceRepository.findByUserId(userId);
		Location selectedLocation = locationRepository.findByLocationId(userPreference.selectedLocation);
		List<Location> primaryLocations = new ArrayList<Location>();
		List<Location> secondaryLocations = new ArrayList<Location>();
		for(Location location: locations) {
			if (location.primary) {
				primaryLocations.add(location);
			} else {
				secondaryLocations.add(location);
			}
		}
	    return new UmberPreference(userId, primaryLocations, secondaryLocations, selectedLocation);
    }*/
    
}

