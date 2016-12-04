package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.Location;
import com.umber.world.housing.jackson.LocationId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberLocation implements  Serializable {
	
	private static final long serialVersionUID = -2532035355651155142L;

	@JsonView(View.Render.class)
    private LocationId id;

    @JsonView(View.Details.class)
    private Integer rank;

    @JsonView(View.Render.class)
    private String name;
    
    @JsonView(View.Render.class)
    private Boolean primary;
    
    @JsonView(View.Render.class)
    private Boolean featured;
    
    public UmberLocation(Location location) {
    	this.id = location.locationId;
    	this.name = location.name;
    	this.rank = location.rank;
    	this.primary = location.primary;
    	this.featured = location.featured;
    }

}


