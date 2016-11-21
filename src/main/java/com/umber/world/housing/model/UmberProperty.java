package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.Amenities;
import com.umber.world.housing.domain.Configs;
import com.umber.world.housing.domain.aggregate.Address;
import com.umber.world.housing.domain.aggregate.DeveloperId;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;
import java.util.Set;

@EqualsAndHashCode(of = "propertyId")
@Getter
@ToString
public final class UmberProperty implements  Serializable {
	
	private static final long serialVersionUID = 6796088788624484437L;

	@JsonView(View.Render.class)
    private PropertyId propertyId;

    @JsonView(View.Render.class)
    private String name;

    @JsonView(View.Render.class)
    private String description;
    
    @JsonView(View.Render.class)
    private Set<Address> addresses;
    
    @JsonView(View.Details.class)
    private DeveloperId developerId;
    
    @JsonView(View.Details.class)
    private Configs configs;
    
    @JsonView(View.Details.class)
    private Amenities ametities;

}



