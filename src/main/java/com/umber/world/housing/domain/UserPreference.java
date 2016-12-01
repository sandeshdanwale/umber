package com.umber.world.housing.domain;

import java.io.Serializable;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import com.umber.world.housing.jackson.LocationId;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AccessType(Type.FIELD)
@Data
@EqualsAndHashCode
@ToString
@Document
@Getter
@Setter
@AllArgsConstructor(onConstructor = @__(@PersistenceConstructor))
public class UserPreference implements Serializable {
	
	private static final long serialVersionUID = -4227283522702761162L;

	@Id
    public String id;
	
    public String userId;
    public LocationId selectedLocation;
}
