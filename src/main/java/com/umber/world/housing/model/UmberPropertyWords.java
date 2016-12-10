package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.PropertyWords;
import com.umber.world.housing.domain.aggregate.PropertyValue;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberPropertyWords implements  Serializable {
	
	private static final long serialVersionUID = 2577985034210344129L;

	@JsonView(View.Render.class)
    public String id;

    @JsonView(View.Details.class)
    public PropertyValue value;
    
    public UmberPropertyWords(PropertyWords propertyWords) {
    	this.id = propertyWords.id;
    	this.value = propertyWords.value;
    }

}



