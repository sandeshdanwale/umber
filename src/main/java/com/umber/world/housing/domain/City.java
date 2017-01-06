package com.umber.world.housing.domain;

import java.io.Serializable;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.jackson.CityId;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@AccessType(Type.FIELD)
@Data
@EqualsAndHashCode
@ToString
@Document
public class City implements Serializable {
	
	private static final long serialVersionUID = 3902971277972790926L;

	@Id
    public CityId cityId;
	
    public Integer rank;
    public String name;
    public Boolean primary;
    public Boolean featured;
    
}
