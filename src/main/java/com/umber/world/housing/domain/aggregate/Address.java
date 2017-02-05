package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Value;

import org.springframework.data.annotation.PersistenceConstructor;

import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;

@Value
@AllArgsConstructor(onConstructor=@__(@PersistenceConstructor))
public class Address implements Serializable {

    private static final long serialVersionUID = 4783870254673744610L;

    private String line1;
    private String line2;
    private String line3;
    private CityId cityId;
    private LandmarkId landmarkId;
    private String state;
    private String postalCode;
    private String country;
    private String latitude;
    private String longitude;
    private AddressType type;

}

