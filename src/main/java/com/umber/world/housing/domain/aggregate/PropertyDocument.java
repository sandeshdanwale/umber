package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import org.springframework.data.annotation.PersistenceConstructor;
import com.umber.world.housing.jackson.PropertyId;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class PropertyDocument implements Serializable {
	
	private static final long serialVersionUID = -1065563108958289949L;
	
	public String type;
	public String name;
	public PropertyId propertyId;
    
}



