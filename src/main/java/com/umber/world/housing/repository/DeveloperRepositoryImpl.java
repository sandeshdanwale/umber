package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.umber.world.housing.domain.Developer;
import com.umber.world.housing.domain.Landmark;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.LandmarkId;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class DeveloperRepositoryImpl implements DeveloperRepositoryCustom {

	private MongoTemplate mongoTemplate;
	private static final String COLLECTION = "developer";
	
	@Override
    public List<Developer> findByCityAndByNameStartsWith(CityId cityId, String name) {
        List<Developer> developers = mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("searchName").regex(name),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId))
        		)), Developer.class
        	);
        return developers;
    }
	
	@Override
    public List<Developer> findByFeaturedAndCityId(Boolean featured, CityId cityId) {
        List<Developer> developers =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("featured").is(true),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId))
        		)), Developer.class
        	);
        return developers;
    }
	
	@Override
    public List<Developer> findByCityLandmarkAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId) {
        List<Developer> developers = mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("searchName").regex(name),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId)),
        				Criteria.where("addresses").elemMatch(Criteria.where("landmarkId").is(landmarkId))
        		)), Developer.class
        	);
        return developers;
    }
	
	@Override
	public long findCountByLandmark(LandmarkId landmarkId) { 
		long developerCpunt =  mongoTemplate.count(
				new Query(new Criteria().andOperator(
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("landmarkId").is(landmarkId))
        		)), COLLECTION);
        return developerCpunt;
	}
	
	@Override
    public List<Developer> findByLandmarkId(LandmarkId landmarkId, Pageable pageable) {
        List<Developer> developers =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("landmarkId").is(landmarkId))
        		))
        		.with(pageable), Developer.class
        		);
        return developers;
    }

}
