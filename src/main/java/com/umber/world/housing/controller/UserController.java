package com.umber.world.housing.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    public  Single<UmberPreference> userPreference(@RequestParam(value="userId", required=false, defaultValue="World") String userId) throws Exception {
		return userPreferenceService.findUserPreferenceById("12345")
				.onErrorReturn(error -> {
                    System.out.println("OnError:: {} :: Personnel Query Service API {} failed :: {} ");
                    return null;
                });
	}
    
}
