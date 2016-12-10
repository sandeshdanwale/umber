package com.umber.world.housing.domain;

import java.io.Serializable;
import java.util.Set;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.domain.aggregate.Address;
import com.umber.world.housing.jackson.DeveloperId;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@AccessType(Type.FIELD)
@Data
@EqualsAndHashCode
@ToString
@Document
public class Developer implements Serializable {
	
	private static final long serialVersionUID = 3902971277972790926L;

	@Id
    public DeveloperId developerId;
	public String name;
	public String description;
	public Boolean featured;
	public Set<Address> addresses;
    
}


