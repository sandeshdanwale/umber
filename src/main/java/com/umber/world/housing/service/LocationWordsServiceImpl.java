package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.model.UmberLocationWords;
import com.umber.world.housing.repository.LocationWordsRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LocationWordsServiceImpl implements LocationWordsService {
	
	private LocationWordsRepository locationWordsRepository;

	@Override
	public Single<List<UmberLocationWords>> findByDeveloperIdStartsWith(String id) {
		Single<List<UmberLocationWords>> umberLocationWords = Single.just(locationWordsRepository.findByIdStartsWith(id)
				.stream().map(d -> new UmberLocationWords(d))
						.collect(Collectors.toList()));
		return umberLocationWords.subscribeOn(Schedulers.io());
				
	}
}



