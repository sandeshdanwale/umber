package com.umber.world.housing.domain;

import java.io.Serializable;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@AccessType(Type.FIELD)
@Data
@EqualsAndHashCode
@ToString
@Document
public class Landmark implements Serializable {
	
	private static final long serialVersionUID = 5854433968077000878L;

	@Id
    public LandmarkId landmarkId;
	
    public Integer rank;
    public String name;
    public Boolean featured;
    public CityId cityId;
    
}

