package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.City;
import com.umber.world.housing.domain.UserPreference;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.UserId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "userId")
@Getter
@ToString
@AllArgsConstructor
public final class UmberPreference implements Serializable {
	
	private static final long serialVersionUID = -1054348482419559666L;
	
	@JsonView(View.Render.class)
    private String userPreferenceId;
	
	@JsonView(View.Details.class)
	private UserId userId;
	
	@JsonView(View.Details.class)
	private CityId cityId;

    @JsonView(View.Render.class)
    private City city;
    
    public UmberPreference(UserPreference userPreference, City city) {
    	this.userPreferenceId = userPreference.id;
    	this.userId = userPreference.userId;
    	this.cityId = userPreference.cityId;
    	this.city = city;
    }

}



