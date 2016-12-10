package com.umber.world.housing.domain;

import java.io.Serializable;
import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.domain.aggregate.LocationValue;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@AccessType(Type.FIELD)
@EqualsAndHashCode
@ToString
@Document
public class LocationWords implements Serializable {
	
	private static final long serialVersionUID = 2688053375350188844L;
	
	@Id
    public String id;
	public LocationValue value;
    
}




