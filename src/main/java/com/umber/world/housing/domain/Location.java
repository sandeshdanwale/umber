package com.umber.world.housing.domain;

import java.io.Serializable;

import org.springframework.data.annotation.AccessType;
import org.springframework.data.annotation.AccessType.Type;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@AccessType(Type.FIELD)
@Data
@EqualsAndHashCode
@ToString
@Document
public class Location implements Serializable{
	private static final long serialVersionUID = -887391449558606307L;
	
	@Id
    public String id;
	
    public Integer rank;
    public String name;
    public Boolean primary;
}
