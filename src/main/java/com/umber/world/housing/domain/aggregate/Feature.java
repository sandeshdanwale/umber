package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;

import org.springframework.data.annotation.PersistenceConstructor;
import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class Feature implements Serializable {
	
	private static final long serialVersionUID = 1784474261725532067L;
	
	private String entity;
	private String specification;
    
}


