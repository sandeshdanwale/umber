package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.City;
import com.umber.world.housing.domain.Landmark;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberLandmark implements  Serializable {
	
	private static final long serialVersionUID = -2726152276688389405L;

	@JsonView(View.Render.class)
    private LandmarkId id;
	
	@JsonView(View.Render.class)
    private CityId cityId;

    @JsonView(View.Details.class)
    private Integer rank;

    @JsonView(View.Render.class)
    private String name;
    
    @JsonView(View.Render.class)
    private Boolean featured;
    
    public UmberLandmark(Landmark landmark) {
    	this.id = landmark.landmarkId;
    	this.name = landmark.name;
    	this.rank = landmark.rank;
    	this.cityId = landmark.cityId;
    	this.featured = landmark.featured;
    }

}


