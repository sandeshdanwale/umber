package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Value;

import org.springframework.data.annotation.PersistenceConstructor;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class Address implements Serializable {

    private static final long serialVersionUID = 4783870254673744610L;

    private String line1;
    private String line2;
    private String line3;
    private String city;
    private String state;
    private String postalCode;
    private String country;
    private AddressType type;

}

