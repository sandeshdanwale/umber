package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import com.umber.world.housing.domain.DeveloperWords;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class DeveloperWordsRepositoryImpl implements DeveloperWordsRepositoryCustom {

	private MongoTemplate mongoTemplate;
	
	@Override
    public List<DeveloperWords> findByIdStartsWith(String id) {
        List<DeveloperWords> developerWords = mongoTemplate.find(
        		new Query(Criteria.where("_id").regex("^" + id)), DeveloperWords.class
        	);
        return developerWords;
    }

}
