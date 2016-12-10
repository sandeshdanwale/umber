package com.umber.world.housing.repository;

import java.util.List;

import com.umber.world.housing.domain.PropertyWords;

public interface PropertyWordsRepositoryCustom {

	List<PropertyWords> findByIdStartsWith(String id);
    
}





