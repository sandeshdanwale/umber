package com.umber.world.housing.domain.aggregate;
import java.io.Serializable;
import org.springframework.data.annotation.PersistenceConstructor;

import com.umber.world.housing.jackson.DeveloperId;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class DeveloperDocument implements Serializable {
	
	private static final long serialVersionUID = -6257615157549061521L;
	
	public String type;
	public String name;
	public DeveloperId developerId;
    
}


