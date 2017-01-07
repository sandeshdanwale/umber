package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PropertyRepositoryImpl implements PropertyRepositoryCustom {

	private MongoTemplate mongoTemplate;
	
	@Override
    public List<Property> findByCityAndByNameStartsWith(CityId cityId, String name) {
        List<Property> properties =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("searchName").regex("^" + name),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId))
        		)), Property.class
        	);
        return properties;
    }
	
	@Override
    public List<Property> findByFeaturedAndCityId(Boolean featured, CityId cityId) {
        List<Property> properties =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("featured").is(true),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId))
        		)), Property.class
        	);
        return properties;
    }
	
	@Override
    public List<Property> findByCityLandmarkAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId) { 
        List<Property> properties =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("searchName").regex("^" + name),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId)),
        				Criteria.where("addresses").elemMatch(Criteria.where("landmarkId").is(landmarkId))
        		)), Property.class
        	);
        return properties;
    }
	
	@Override
    public List<Property> findByCityLandmarkDeveloperAndByNameStartsWith(CityId cityId, String name, LandmarkId landmarkId, DeveloperId developerId) { 
        List<Property> properties =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("searchName").regex("^" + name),
        				Criteria.where("developerId").is(developerId),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId)),
        				Criteria.where("addresses").elemMatch(Criteria.where("landmarkId").is(landmarkId))
        		)), Property.class
        	);
        return properties;
    }
	
	@Override
    public List<Property> findByCityDeveloperAndByNameStartsWith(CityId cityId, String name, DeveloperId developerId) { 
        List<Property> properties =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("searchName").regex("^" + name),
        				Criteria.where("developerId").is(developerId),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId))
        		)), Property.class
        	);
        return properties;
    }

}
