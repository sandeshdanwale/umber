package com.umber.world.housing.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.umber.world.housing.domain.City;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class CityRepositoryImpl implements CityRepositoryCustom {

	private MongoTemplate mongoTemplate;
	
	@Override
    public List<City> findByNameStartsWith(String name) {
        List<City> city = mongoTemplate.find(
        		new Query(Criteria.where("searchName").regex(name)), City.class);
        return city;
    }

}
