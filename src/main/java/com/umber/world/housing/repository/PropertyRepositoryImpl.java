package com.umber.world.housing.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.umber.world.housing.domain.Property;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.DeveloperId;
import com.umber.world.housing.jackson.LandmarkId;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PropertyRepositoryImpl implements PropertyRepositoryCustom {

	private MongoTemplate mongoTemplate;
	
	private static final String COLLECTION = "property";
	
	@Override
    public List<Property> findByCityAndByNameStartsWith(CityId cityId, String name) {
        List<Property> properties =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("searchName").regex(name),
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
        				Criteria.where("searchName").regex(name),
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
        				Criteria.where("searchName").regex(name),
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
        				Criteria.where("searchName").regex(name),
        				Criteria.where("developerId").is(developerId),
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId))
        		)), Property.class
        	);
        return properties;
    }
	
	@Override
	public List<Property> findNearByPtoperties(LandmarkId landmarkId, CityId cityId, Pageable pageable) { 
		List<Property> properties =  mongoTemplate.find(
        		new Query(new Criteria().andOperator(
        				Criteria.where("addresses").elemMatch(Criteria.where("type").is("HOME")),
        				Criteria.where("addresses").elemMatch(Criteria.where("cityId").is(cityId)),
        				Criteria.where("addresses").elemMatch(Criteria.where("landmarkId").is(landmarkId))
        		))
        		.with(pageable), Property.class
        	);
        return properties;
	}
	
	@Override
	public List<CityId> findByDeveloperDistinctCity(DeveloperId developerId) { 
		Criteria criteria = new Criteria();
		criteria.where("developerId").is(developerId);
		Query query = new Query();
		query.addCriteria(criteria);
		DBCollection collection = mongoTemplate.getCollection(COLLECTION);
		ArrayList ids = (ArrayList) collection.distinct("addresses.cityId", query.getQueryObject());
		List<CityId> cityIds = new ArrayList<CityId>();
		for (int i = 0; i < ids.size(); i++) {
	        BasicDBObject id = (BasicDBObject) ids.get(i);
	        String registrationId = id.getString("registrationId");
	        cityIds.add(new CityId(registrationId));
		}
        return cityIds;
	}
	
	@Override
	public long findCountByDeveloper(DeveloperId developerId) { 
		long propertyCount =  mongoTemplate.count(
        		new Query(Criteria.where("developerId").is(developerId)), COLLECTION);
        return propertyCount;
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
	public List<Property> findByDeveloperId(DeveloperId developerId, Pageable pageable) { 
		List<Property> properties =  mongoTemplate.find(
        		new Query(Criteria.where("developerId").is(developerId)
        		)
        		.with(pageable), Property.class
        	);
        return properties;
	}
	

}
