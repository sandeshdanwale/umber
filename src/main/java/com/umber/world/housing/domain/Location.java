package com.umber.world.housing.domain;

import java.io.Serializable;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.jackson.LocationId;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@AccessType(Type.FIELD)
@Data
@EqualsAndHashCode
@ToString
@Document
public class Location implements Serializable {
	
	private static final long serialVersionUID = 3902971277972790926L;

	@Id
    public LocationId locationId;
	
    public Integer rank;
    public String name;
    public Boolean primary;
    
}
