package com.umber.world.housing.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.umber.world.housing.jackson.View;
import com.umber.world.housing.model.UmberPreference;
import com.umber.world.housing.service.UserPreferenceService;

@RestController
@RequestMapping("/userPreference")
public class UserController {
	
	@Autowired
	private UserPreferenceService userPreferenceService;
	
	@JsonView(View.Render.class)
	@RequestMapping(value={"/", ""})
    public UmberPreference userPreference(@RequestParam(value="userId", required=false, defaultValue="World") String userId) {
		return userPreferenceService.findUserPreferenceById(userId);
    }
}
