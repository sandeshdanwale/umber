package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Value;

import org.springframework.data.annotation.PersistenceConstructor;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class Phone implements Serializable {
	
	private static final long serialVersionUID = -8808087520319765651L;
	
    private Long phoneNumber;
    private PhoneType type;

}

