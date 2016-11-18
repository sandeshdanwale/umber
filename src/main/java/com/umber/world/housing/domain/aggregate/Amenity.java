package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Value;

import org.springframework.data.annotation.PersistenceConstructor;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class Amenity implements Serializable {
	
	private static final long serialVersionUID = 8371580212926402467L;
	
	private AmenityType type;
	private Set<Feature> features;

}


