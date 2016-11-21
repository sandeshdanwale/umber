package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.Location;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;
import java.util.List;

@EqualsAndHashCode(of = "userId")
@Getter
@ToString
@AllArgsConstructor
public final class UmberPreference implements Serializable {
	
	private static final long serialVersionUID = -6291427391956422170L;

	@JsonView(View.Details.class)
	private String userId;
	
	@JsonView(View.Render.class)
    private List<Location> primaryLocations;

    @JsonView(View.Render.class)
    private List<Location> secondaryLocations;

    @JsonView(View.Render.class)
    private Location selectedLocation;

}



