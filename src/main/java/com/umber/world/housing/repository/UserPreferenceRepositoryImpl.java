package com.umber.world.housing.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.umber.world.housing.domain.UserPreference;
import com.umber.world.housing.jackson.CityId;
import com.umber.world.housing.jackson.UserId;

import lombok.AllArgsConstructor;

@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserPreferenceRepositoryImpl implements UserPreferenceRepositoryCustom {

	private MongoTemplate mongoTemplate;
	
	@Override
    public UserPreference updateCity(UserId userId, CityId cityId) {
		
        Query query = new Query(Criteria.where("userId").is(userId));
        
        Update update = new Update();
        update.set("cityId", cityId);

        mongoTemplate.updateFirst(query, update, UserPreference.class);
        UserPreference userPreference =  mongoTemplate.findOne(query, UserPreference.class);
        return userPreference;
        
    }

}

