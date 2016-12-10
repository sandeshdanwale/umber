package com.umber.world.housing.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umber.world.housing.model.UmberDeveloperWords;
import com.umber.world.housing.repository.DeveloperWordsRepository;

import lombok.AllArgsConstructor;
import rx.Single;
import rx.schedulers.Schedulers;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class DeveloperWordsServiceImpl implements DeveloperWordsService {
	
	private DeveloperWordsRepository developerWordsRepository;

	@Override
	public Single<List<UmberDeveloperWords>> findByDeveloperIdStartsWith(String id) {
		Single<List<UmberDeveloperWords>> umberDeveloperWords = Single.just(developerWordsRepository.findByIdStartsWith(id)
				.stream().map(d -> new UmberDeveloperWords(d))
						.collect(Collectors.toList()));
		return umberDeveloperWords.subscribeOn(Schedulers.io());
				
	}
}

