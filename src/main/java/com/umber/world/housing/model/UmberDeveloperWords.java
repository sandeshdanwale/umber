package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.DeveloperWords;
import com.umber.world.housing.domain.aggregate.DeveloperValue;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberDeveloperWords implements  Serializable {
	
	private static final long serialVersionUID = -3963699715241893502L;

	@JsonView(View.Render.class)
    public String id;

    @JsonView(View.Details.class)
    public DeveloperValue value;
    
    public UmberDeveloperWords(DeveloperWords developerWords) {
    	this.id = developerWords.id;
    	this.value = developerWords.value;
    }

}


