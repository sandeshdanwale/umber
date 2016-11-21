package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.jackson.LocationId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "locationId")
@Getter
@ToString
public final class UmberLocation implements  Serializable {
	
	private static final long serialVersionUID = 6796088788624484437L;

	@JsonView(View.Render.class)
    private LocationId locationId;

    @JsonView(View.Details.class)
    private Integer rank;

    @JsonView(View.Render.class)
    private String name;
    
    @JsonView(View.Render.class)
    private Boolean primary;

}


