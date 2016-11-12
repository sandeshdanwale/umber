package com.umber.world.housing.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.domain.Location;
import com.umber.world.housing.domain.Preference;
import com.umber.world.housing.domain.UserPreference;
import com.umber.world.housing.repository.LocationRepository;
import com.umber.world.housing.repository.UserPreferenceRepository;

@RestController
public class UserController {
	
	@Autowired
	private LocationRepository locationRepository;
	
	@Autowired
	private UserPreferenceRepository userPreferenceRepository;
	
	private UserPreference userPreference;
	
	@RequestMapping(value={"/userPreference"})
    public Preference userPreference(@RequestParam(value="userId", required=false, defaultValue="World") String name) {
		List<Location> locations = locationRepository.findAll();
		userPreference = userPreferenceRepository.findByUserId("12345");
		List<String> primaryLocations = new ArrayList<String>();
		List<String> secondaryLocations = new ArrayList<String>();
		for(Location location: locations) {
			if (location.primary) {
				primaryLocations.add(location.name);
			} else {
				secondaryLocations.add(location.name);
			}
		}
        return new Preference(primaryLocations, secondaryLocations, userPreference.selectedLocationName);
    }
}
