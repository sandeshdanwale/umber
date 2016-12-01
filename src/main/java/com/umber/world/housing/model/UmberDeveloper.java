package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.Developer;
import com.umber.world.housing.domain.aggregate.Address;
import com.umber.world.housing.domain.aggregate.DeveloperId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;
import java.util.Set;

@EqualsAndHashCode(of = "developerId")
@Getter
@ToString
public final class UmberDeveloper implements  Serializable {
	
	private static final long serialVersionUID = 1287016213393448863L;

	@JsonView(View.Render.class)
    private DeveloperId developerId;

    @JsonView(View.Details.class)
    private String name;

    @JsonView(View.Render.class)
    private String description;
    
    @JsonView(View.Render.class)
    private Boolean featured;
    
    @JsonView(View.Render.class)
    private Set<Address> addresses;
    
    public UmberDeveloper(Developer developer) {
    	this.developerId = developer.developerId;
    	this.name = developer.name;
    	this.description = developer.description;
    	this.featured = developer.featured;
    	this.addresses = developer.addresses;
    }

}

