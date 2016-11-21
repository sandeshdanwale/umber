package com.umber.world.housing.service;

import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.domain.Location;
import com.umber.world.housing.domain.UserPreference;
import com.umber.world.housing.model.UmberPreference;
import com.umber.world.housing.repository.LocationRepository;
import com.umber.world.housing.repository.UserPreferenceRepository;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserPreferenceServiceImpl implements UserPreferenceService {

    private LocationRepository locationRepository;
    private UserPreferenceRepository userPreferenceRepository;
    
   /* @Override
    public Single<UmberPreference> findUserPreferenceById(String userId) {
    	
    	List<Location> primaryLocations = new ArrayList<Location>();
		List<Location> secondaryLocations = new ArrayList<Location>();
		
		Single<List<Location>> locations = Single.just(locationRepository.findAll())
	    .map(loc -> {
	    	return loc.stream().collect(Collectors.toList());
	    });
	    
	    
		userId = new String("12345");
		Single<Location> selectedLocation = Single.just(userPreferenceRepository.findByUserId(userId))
				.flatMap(userPreference -> Single.just(locationRepository.findByLocationId(userPreference.selectedLocation)));
		
		//return Single.zip(selectedLocation, (s) -> {
			//return new UmberPreference(userId, primaryLocations, secondaryLocations, selectedLocation);
		//});
		return selectedLocation.flatMap(l -> {
			UmberPreference umberPreference = new UmberPreference(null, primaryLocations, secondaryLocations, null);
			return Single.just(umberPreference);
		}).subscribeOn(Schedulers.io());
    }*/
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
    }
    
}

