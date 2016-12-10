package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import org.springframework.data.annotation.PersistenceConstructor;

import com.umber.world.housing.jackson.LocationId;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class LocationDocument implements Serializable {
	
	private static final long serialVersionUID = 2865747460962074080L;
	
	public String type;
	public String name;
	public LocationId locationId;
    
}


