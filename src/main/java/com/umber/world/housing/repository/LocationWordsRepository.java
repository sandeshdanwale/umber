package com.umber.world.housing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.umber.world.housing.domain.DeveloperWords;

public interface LocationWordsRepository extends MongoRepository<DeveloperWords, String>,LocationWordsRepositoryCustom {
}



