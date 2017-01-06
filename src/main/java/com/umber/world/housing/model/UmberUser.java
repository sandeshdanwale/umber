package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.User;
import com.umber.world.housing.jackson.UserId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;

@EqualsAndHashCode(of = "id")
@Getter
@ToString
public final class UmberUser implements  Serializable {
	
	private static final long serialVersionUID = -7741656206239656922L;

	@JsonView(View.Render.class)
    private UserId id;

    @JsonView(View.Render.class)
    private String name;
    
    public UmberUser(User user) {
    	this.id = user.userId;
    	this.name = user.name;
    }

}


