package com.umber.world.housing.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.domain.Location;
import com.umber.world.housing.domain.Preference;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.domain.UserPreference;
import com.umber.world.housing.repository.LocationRepository;
import com.umber.world.housing.repository.PropertyRepository;
import com.umber.world.housing.repository.UserPreferenceRepository;

@RestController

public class UserController {
	
	@Autowired
	private LocationRepository locationRepository;
	
	@Autowired
	private UserPreferenceRepository userPreferenceRepository;
	
	private UserPreference userPreference;
	
	@Autowired
	private PropertyRepository propertyRepository;
	
	
	@RequestMapping(value={"/userPreference"})
    public List<Property> userPreference(@RequestParam(value="userId", required=false, defaultValue="World") String name) {
		List<Location> locations = locationRepository.findAll();
		userPreference = userPreferenceRepository.findByUserId("12345");
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
		List<Property> properties = propertyRepository.findAll();
        return properties;//new Preference(primaryLocations, secondaryLocations, selectedLocation);
    }
}
