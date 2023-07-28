package com.neo.security.service;

import java.util.List;

import com.neo.security.entity.Provider;

public interface Provider_Service {

	Boolean deleteProvider(int id);
	
	List<Provider> getProviders();

	Provider getProviderByEmail(String email);

	Boolean updatingSchedule(Provider provider);

	List<Provider> getProviderSpecific(String category, String location);
	
	Provider updateLocalServiceProvider(String email, Provider obj);

}
