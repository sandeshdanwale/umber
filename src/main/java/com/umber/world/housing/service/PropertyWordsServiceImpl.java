package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.model.UmberPropertyWords;
import com.umber.world.housing.repository.PropertyWordsRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PropertyWordsServiceImpl implements PropertyWordsService {
	
	private PropertyWordsRepository propertyWordsRepository;

	@Override
	public Single<List<UmberPropertyWords>> findByDeveloperIdStartsWith(String id) {
		Single<List<UmberPropertyWords>> umberPropertyWords = Single.just(propertyWordsRepository.findByIdStartsWith(id)
				.stream().map(d -> new UmberPropertyWords(d))
						.collect(Collectors.toList()));
		return umberPropertyWords.subscribeOn(Schedulers.io());
				
	}
}


