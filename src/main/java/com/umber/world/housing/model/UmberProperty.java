package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.domain.aggregate.Address;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;
import java.util.Set;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberProperty implements  Serializable {
	
	private static final long serialVersionUID = 2710891381997898714L;

	@JsonView(View.Render.class)
    private PropertyId id;

    @JsonView(View.Render.class)
    private String name;

    @JsonView(View.Render.class)
    private String description;
    
    @JsonView(View.Render.class)
    private Set<Address> addresses;
    
    @JsonView(View.Details.class)
    private DeveloperId developerId;
    
    @JsonView(View.Details.class)
    private String developerName;
    
    @JsonView(View.Details.class)
    private Boolean featured;
    
    @JsonView(View.Details.class)
    private UmberConfigs configs;
    
    @JsonView(View.Details.class)
    private UmberAmenities amenities;
    
    public UmberProperty(Property property) {
    	
    	this.id = property.propertyId;
    	this.name = property.name;
    	this.description = property.description;
    	this.addresses = property.addresses;
    	this.developerId = property.developerId;
    	this.featured = property.featured;
    	
    }
   
    public UmberProperty(Property property, UmberConfigs configs, UmberAmenities amenities) {
    	
    	this.id = property.propertyId;
    	this.name = property.name;
    	this.description = property.description;
    	this.addresses = property.addresses;
    	this.developerId = property.developerId;
    	this.featured = property.featured;
    	this.configs = configs;
    	this.amenities = amenities;
    	
    }
    
    public UmberProperty(Property property, UmberConfigs configs, UmberAmenities amenities, String developerName) {
    	
    	this.id = property.propertyId;
    	this.name = property.name;
    	this.description = property.description;
    	this.addresses = property.addresses;
    	this.developerId = property.developerId;
    	this.featured = property.featured;
    	this.developerName = developerName;
    	this.configs = configs;
    	this.amenities = amenities;
    	
    }

}



