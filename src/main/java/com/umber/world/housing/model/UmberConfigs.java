package com.umber.world.housing.model;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.domain.Configs;
import com.umber.world.housing.domain.aggregate.Config;
import com.umber.world.housing.jackson.PropertyId;
import com.umber.world.housing.jackson.View;

import lombok.*;

import java.io.Serializable;
import java.util.List;

@EqualsAndHashCode(of = "configId")
@Getter
@ToString
public final class UmberConfigs implements  Serializable {
	
	private static final long serialVersionUID = 3278688422882312108L;

	@JsonView(View.Render.class)
    private String configId;

    @JsonView(View.Details.class)
    private PropertyId propertyId;

    @JsonView(View.Render.class)
    private List<Config> configs;
    
    public UmberConfigs(Configs configs) {
    	this.configId = configs.id;
    	this.propertyId = configs.propertyId;
    	this.configs = configs.configs;
    }

}
