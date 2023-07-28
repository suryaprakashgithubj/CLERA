package com.neo.security.service;

import java.util.List;

import com.neo.security.entity.LocalServices;

public interface localservice_service {
	
	Boolean addService(LocalServices obj);
	
	Boolean deleteService(Long id);

	List<LocalServices> getServices();
	
	LocalServices getServiceById(Long id);

	LocalServices updateServices(Long id, LocalServices service);

}
