package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import com.umber.world.housing.domain.LocationWords;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LocationWordsRepositoryImpl implements LocationWordsRepositoryCustom {

	private MongoTemplate mongoTemplate;
	
	@Override
    public List<LocationWords> findByIdStartsWith(String id) {
        List<LocationWords> locationWords = mongoTemplate.find(
        		new Query(Criteria.where("_id").regex("^" + id)), LocationWords.class
        	);
        return locationWords;
    }

}

