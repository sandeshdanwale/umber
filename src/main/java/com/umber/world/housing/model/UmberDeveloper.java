package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.Developer;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.domain.aggregate.Address;
import com.umber.world.housing.domain.aggregate.Phone;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberDeveloper implements  Serializable {
	
	private static final long serialVersionUID = 1287016213393448863L;

	@JsonView(View.Render.class)
    private DeveloperId id;

    @JsonView(View.Details.class)
    private String name;

    @JsonView(View.Render.class)
    private String description;
    
    @JsonView(View.Render.class)
    private String email;
    
    @JsonView(View.Render.class)
    private Boolean featured;
    
    @JsonView(View.Render.class)
    private Boolean globalFeatured;
    
    @JsonView(View.Render.class)
    private Set<Address> addresses;
    
    @JsonView(View.Render.class)
    private Set<Phone> phones;
    
    @JsonView(View.Render.class)
    private List<UmberCity> cities;
    
    @JsonView(View.Render.class)
    private List<UmberProperty> properties;
    
    @JsonView(View.Render.class)
    private Long numberOfProjects;
    
    public UmberDeveloper(Developer developer) {
    	this.id = developer.developerId;
    	this.name = developer.name;
    	this.description = developer.description;
    	this.featured = developer.featured;
    	this.globalFeatured = developer.globalFeatured;
    	this.addresses = developer.addresses;
    	this.email = developer.email;
    	this.phones = developer.phones;
    }
    
    public UmberDeveloper(Developer developer, List<UmberCity> cities, Long numberOfProjects, List<UmberProperty> properties) {
    	this.id = developer.developerId;
    	this.name = developer.name;
    	this.description = developer.description;
    	this.featured = developer.featured;
    	this.globalFeatured = developer.globalFeatured;
    	this.addresses = developer.addresses;
    	this.email = developer.email;
    	this.phones = developer.phones;
    	this.cities = cities;
    	this.numberOfProjects = numberOfProjects;
    	this.properties = properties;
    }
    
    public UmberDeveloper(Developer developer, List<UmberProperty> properties) {
    	this.id = developer.developerId;
    	this.name = developer.name;
    	this.description = developer.description;
    	this.featured = developer.featured;
    	this.globalFeatured = developer.globalFeatured;
    	this.addresses = developer.addresses;
    	this.email = developer.email;
    	this.phones = developer.phones;
    	this.properties = properties;
    }

}

