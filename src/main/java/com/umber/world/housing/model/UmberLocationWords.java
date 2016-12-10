package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.LocationWords;
import com.umber.world.housing.domain.aggregate.LocationValue;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberLocationWords implements  Serializable {
	
	private static final long serialVersionUID = 2577985034210344129L;

	@JsonView(View.Render.class)
    public String id;

    @JsonView(View.Details.class)
    public LocationValue value;
    
    public UmberLocationWords(LocationWords locationWords) {
    	this.id = locationWords.id;
    	this.value = locationWords.value;
    }

}


