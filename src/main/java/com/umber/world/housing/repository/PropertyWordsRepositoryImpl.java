package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import com.umber.world.housing.domain.PropertyWords;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PropertyWordsRepositoryImpl implements PropertyWordsRepositoryCustom {

	private MongoTemplate mongoTemplate;
	
	@Override
    public List<PropertyWords> findByIdStartsWith(String id) {
        List<PropertyWords> propertyWords = mongoTemplate.find(
        		new Query(Criteria.where("_id").regex("^" + id)), PropertyWords.class
        	);
        return propertyWords;
    }

}

