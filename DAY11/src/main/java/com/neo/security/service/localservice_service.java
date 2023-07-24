package com.neo.security.service;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.neo.security.entity.LocalServices;
import com.neo.security.entity.User;

import com.neo.security.repository.LS_Repository;

@Service
public class localservice_service {
     @Autowired     
     private LS_Repository serv;
     
     public LocalServices savedetails(LocalServices s)
     {
    	 return serv.save(s);
     }
     

    	 public List<LocalServices> getAllDetails()
         {
        	 List<LocalServices> arr = new ArrayList<>();
        	 arr=serv.findAll();
        	 return arr;   
        	 }
         

     
  
    
    

}