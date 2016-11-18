package com.umber.world.housing.domain;

import java.io.Serializable;
import java.util.Set;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.domain.aggregate.PropertyId;
import com.umber.world.housing.domain.aggregate.Amenity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@AccessType(Type.FIELD)
@Data
@AllArgsConstructor(onConstructor = @__(@PersistenceConstructor))
@EqualsAndHashCode
@ToString
@Document
public class Amenities implements Serializable {
	
	private static final long serialVersionUID = -3642919877081306402L;

	@Id
	private String id;
    
	private PropertyId propertyId;
	private Set<Amenity> amenities;
    
    
}



