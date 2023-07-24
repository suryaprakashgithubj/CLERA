package com.neo.security.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LocalServices {

	 @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
	 
	 private long service_id;
	 
	 private String category;
	 
	
	 
	 private String description;
	 
	

	public long getService_id() {
		return service_id;
	}

	public void setService_id(long service_id) {
		this.service_id = service_id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	

	public LocalServices(long service_id, String category, String description) {
		super();
		this.service_id = service_id;
		this.category = category;
		this.description = description;
		
	}
	 
	public LocalServices()
	{
		
	}
	 

}
