package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.PersistenceConstructor;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class LocationValue implements Serializable {
	
	private static final long serialVersionUID = 3987109443696636671L;
	
	public List<LocationDocument> documents;
    
}



