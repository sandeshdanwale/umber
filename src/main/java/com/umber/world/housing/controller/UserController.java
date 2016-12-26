package com.umber.world.housing.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.umber.world.housing.domain.City;
import com.umber.world.housing.model.UmberPreference;
import com.umber.world.housing.service.UserPreferenceService;

import rx.Single;

@RestController
@RequestMapping("/userPreference")
public class UserController {
	
	@Autowired
	private UserPreferenceService userPreferenceService;
	
	/*@JsonView(View.Render.class)
	@RequestMapping(value={"/", ""})
    public UmberPreference userPreference(@RequestParam(value="userId", required=false, defaultValue="World") String userId) {
		return userPreferenceService.findUserPreferenceById(userId);
    }*/
	
	@RequestMapping(value={"/", ""})
    public  Single<UmberPreference> getUserPreference(@RequestParam(value="userId", required=false) String userId) throws Exception {
		return userPreferenceService.findUserPreferenceByUserId(userId)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: User Preference Service API {} failed :: {} ");
                    return null;
                });
	}
	
	@RequestMapping(value = "/updateCity", method = RequestMethod.POST)
	public Single<UmberPreference> setUserCity(@RequestParam(value="userId", required=true) String userId, 
			@RequestParam(value="cityId", required=true) String cityId) throws Exception {
		return userPreferenceService.updteCity(userId, cityId)
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: User Preference Service API {} failed :: {} ");
                    return null;
                });
	}
    
}
