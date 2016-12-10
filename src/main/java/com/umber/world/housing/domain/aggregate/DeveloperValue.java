package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.PersistenceConstructor;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class DeveloperValue implements Serializable {
	
	private static final long serialVersionUID = 7371912031870786254L;
	
	public List<DeveloperDocument> documents;
    
}



