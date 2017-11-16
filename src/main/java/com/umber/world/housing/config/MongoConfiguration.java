package com.umber.world.housing.config;

//package com.umber.world.housing.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
import com.mongodb.MongoClient;

@Configuration
public class MongoConfiguration extends AbstractMongoConfiguration {

  @Bean
  public MongoClient mongoClient() {
    return new MongoClient("localhost");
  }

  @Override
  public String getDatabaseName() {
    return "database";
  }

  @Override
  public String getMappingBasePackage() {
    return "com.bigbank.domain";
  }

  // the following are optional


  @Bean
  @Override
  public MongoCustomConversions customConversions() {
//    List<Converter<?, ?>> converterList = new ArrayList<Converter<?, ?>>();
//    converterList.add(new org.springframework.data.mongodb.test.PersonReadConverter());
//    converterList.add(new org.springframework.data.mongodb.test.PersonWriteConverter());
    return new MongoCustomConversions(null);
  }

}