package com.umber.world.housing.repository;

import java.util.List;

import com.umber.world.housing.domain.DeveloperWords;

public interface DeveloperWordsRepositoryCustom {

	List<DeveloperWords> findByIdStartsWith(String id);
    
}



