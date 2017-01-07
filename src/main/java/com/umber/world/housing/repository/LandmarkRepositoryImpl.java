package com.umber.world.housing.repository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.umber.world.housing.domain.Landmark;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LandmarkRepositoryImpl implements LandmarkRepositoryCustom {

	private MongoTemplate mongoTemplate;
	
	@Override
    public List<Landmark> findByCityAndByNameStartsWith(CityId cityId, String name) {
		if (name == null) {
			return this.findByFeaturedAndCityId(true, cityId);
		} else {
			List<Landmark> landmarks = mongoTemplate.find(
	        		new Query(new Criteria().andOperator(
	        				Criteria.where("searchName").regex("^" + name),
	        				Criteria.where("cityId").is(cityId)
	        		)), Landmark.class
	        	);
			return landmarks;
		}
        
        
    }
	
	@Override
    public List<Landmark> findByFeaturedAndCityId(Boolean featured, CityId cityId) {
        List<Landmark> landmarks =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("featured").is(true),
        				Criteria.where("cityId").is(cityId)
        		)), Landmark.class
        	);
        return landmarks;
    }

}

