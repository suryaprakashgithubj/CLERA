package com.neo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.LocalServices;
import com.neo.security.entity.User;
import com.neo.security.service.localservice_service;

@RestController
@RequestMapping("/api/v4/user")
public class LS_Controller {	
	
    @Autowired
    private localservice_service lsservice;
    
    @GetMapping("/getservice")
    public List<LocalServices> getDetails()
    {
    	return lsservice.getAllDetails();
    }
   
    
    
    @PostMapping("/addservice")
    public LocalServices addDetails(@RequestBody LocalServices s)
    {
    	return lsservice.savedetails(s);
    	
    }
    
   
    
    
}