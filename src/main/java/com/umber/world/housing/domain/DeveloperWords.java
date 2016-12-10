package com.umber.world.housing.domain;

import java.io.Serializable;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.domain.aggregate.DeveloperValue;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@AccessType(Type.FIELD)
@EqualsAndHashCode
@ToString
@Document
public class DeveloperWords implements Serializable {
	
	private static final long serialVersionUID = 1319573544299667745L;
	
	@Id
    public String id;
	public DeveloperValue value;
    
}



