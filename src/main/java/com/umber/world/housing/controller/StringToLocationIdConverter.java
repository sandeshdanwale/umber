package com.umber.world.housing.controller;

import org.springframework.core.convert.converter.Converter;
import org.springframework.util.NumberUtils;

import com.umber.world.housing.jackson.LocationId;
/*
public class StringToLocationIdConverter implements Converter<String, LocationId> {
	@Override
	public LocationId convert(String source) throws IllegalArgumentException {

		Long sourceL = NumberUtils.parseNumber(source, Long.class);

		return new LocationId(sourceL);
	}
}
*/

