package com.umber.world.housing.domain;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.PersistenceConstructor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode
@ToString
@AllArgsConstructor(onConstructor = @__(@PersistenceConstructor))

public class Preference implements Serializable {
	
	private static final long serialVersionUID = 2158948254248065825L;
	
    public List<Location> primaryLocations;
    public List<Location> secondaryLocations;
    public Location selectedLocation;
}

