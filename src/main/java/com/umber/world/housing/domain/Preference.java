package com.umber.world.housing.domain;

import java.io.Serializable;
import java.util.List;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode
@ToString
public class Preference implements Serializable {

	public Preference(List<String> primaryLocations, List<String> secondaryLocations, String selectedLocation) {
		// TODO Auto-generated constructor stub
		this.primaryLocations = primaryLocations;
		this.secondaryLocations = secondaryLocations;
		this.selectedLocation = selectedLocation;
	}
	private static final long serialVersionUID = -887391449558606307L;
	
    public List<String> primaryLocations;
    public List<String> secondaryLocations;
    public String selectedLocation;
}

