package com.umber.world.housing.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.domain.Location;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.domain.UserPreference;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.model.UmberProperty;
import com.umber.world.housing.repository.LocationRepository;
import com.umber.world.housing.repository.PropertyRepository;
import com.umber.world.housing.repository.UserPreferenceRepository;

@RestController
@RequestMapping("/porperty")
public class PropertyController {
	
	@Autowired
	private LocationRepository locationRepository;
	
	@Autowired
	private PropertyRepository propertyRepository;
	
	private UmberProperty umberProperty;
	
	
	@RequestMapping(value={"/", ""})
    public Property userPreference(@RequestParam(value="propertyId", required=false, defaultValue="World") String name) {
		PropertyId propertyId = new PropertyId("201");
		Property property = propertyRepository.findByPropertyId(propertyId);
        return property; //new umberProperty(primaryLocations, secondaryLocations, selectedLocation);
    }
}

