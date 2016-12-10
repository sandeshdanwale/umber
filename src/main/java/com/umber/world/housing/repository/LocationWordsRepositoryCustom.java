package com.umber.world.housing.repository;

import java.util.List;

import com.umber.world.housing.domain.LocationWords;

public interface LocationWordsRepositoryCustom {

	List<LocationWords> findByIdStartsWith(String id);
    
}




