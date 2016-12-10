package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.PersistenceConstructor;
import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class PropertyValue implements Serializable {
	
	private static final long serialVersionUID = 1011877276836788318L;
	
	public List<PropertyDocument> documents;
    
}
