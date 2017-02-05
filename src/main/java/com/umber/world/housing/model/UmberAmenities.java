package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.Amenities;
import com.umber.world.housing.domain.aggregate.Amenity;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;
import java.util.List;

@EqualsAndHashCode(of = "amenityId")
@Getter
@ToString
public final class UmberAmenities implements  Serializable {
	
	private static final long serialVersionUID = 535051466416229161L;

	@JsonView(View.Render.class)
    private String amenityId;

    @JsonView(View.Details.class)
    private PropertyId propertyId;

    @JsonView(View.Render.class)
    private List<Amenity> amenities;
    
    public UmberAmenities(Amenities amenities) {
    	this.amenityId = amenities.id;
    	this.propertyId = amenities.propertyId;
    	this.amenities = amenities.amenities;
    	//amenities.amenities.stream().forEach((Amenity a) -> {
    		//this.amenities.add(new Amenity(a));
    	//});
    }
    
    public UmberAmenities() {
    }

}

