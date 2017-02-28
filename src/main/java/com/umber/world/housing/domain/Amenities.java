package com.umber.world.housing.domain;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.domain.aggregate.Amenity;
import com.umber.world.housing.jackson.PropertyId;

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
	private static final long serialVersionUID = 3621364604383695824L;

	@Id
	public String id;
    
	public PropertyId propertyId;
	public List<Amenity> amenities;
    
    
}



