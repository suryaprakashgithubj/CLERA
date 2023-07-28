package com.neo.security.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Provider;
import com.neo.security.repository.Provider_Repo;

@Service
public class ProviderImpl implements Provider_Service {

	@Autowired
	private Provider_Repo repo;

	@Override
	public Boolean deleteProvider(int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public List<Provider> getProviders() {
		return repo.findAll();
	}

	@Override
	public Provider getProviderByEmail(String email) {
		return repo.findByEmail(email).get();
	}

	@Override
	public Boolean updatingSchedule(Provider provider) {
		return repo.save(provider) != null ? true : false;
	}

	@Override
	public List<Provider> getProviderSpecific(String category, String location){
		return repo.findByCategoryAndLocation(category, location);
	}

	@Override
	public Provider updateLocalServiceProvider(String email, Provider obj) {
		
		Provider provider = repo.findByEmail(email).get();
		
		if(Objects.nonNull(provider)) {
			if(obj.getServiceProviding() != null) {
				provider.setServiceProviding(obj.getServiceProviding());
			}
			
			if(obj.getExperience() != 0) {
				provider.setExperience(obj.getExperience());
			}
			
			if(obj.getWorkingHour() != null) {
				provider.setWorkingHour(obj.getWorkingHour());
			}
			if(obj.getCategory() != null) {
				provider.setCategory(obj.getCategory());
			}
			return repo.saveAndFlush(provider);			
		}
		return null;
	}

}
