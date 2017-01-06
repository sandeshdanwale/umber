package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.City;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberCity implements  Serializable {
	
	private static final long serialVersionUID = -2532035355651155142L;

	@JsonView(View.Render.class)
    private CityId id;

    @JsonView(View.Details.class)
    private Integer rank;

    @JsonView(View.Render.class)
    private String name;
    
    @JsonView(View.Render.class)
    private Boolean primary;
    
    @JsonView(View.Render.class)
    private Boolean featured;
    
    public UmberCity(City city) {
    	this.id = city.cityId;
    	this.name = city.name;
    	this.rank = city.rank;
    	this.primary = city.primary;
    	this.featured = city.featured;
    }

}


