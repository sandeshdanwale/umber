package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.umber.world.housing.domain.User;
import com.umber.world.housing.jackson.UserId;

import java.util.List;

public interface UserRepository extends MongoRepository<User, UserId> {

    List<User> findAll();
    User findByUserId(UserId userId);
    
}
