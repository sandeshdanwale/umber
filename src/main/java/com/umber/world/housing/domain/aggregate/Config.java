package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import java.time.LocalDateTime;
import org.springframework.data.annotation.PersistenceConstructor;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class Config implements Serializable {
	
	private static final long serialVersionUID = 1784474261725532067L;
	
	private String type;
	private Integer sqft;
	private Integer quantity;
	private LocalDateTime posession;
	private Double BasePrice;
    
}

