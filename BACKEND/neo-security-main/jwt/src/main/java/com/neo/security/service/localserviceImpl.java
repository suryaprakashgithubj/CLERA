package com.neo.security.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.LocalServices;
import com.neo.security.repository.LS_Repository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class localserviceImpl implements localservice_service {
	
    @Autowired
	private  LS_Repository repo;

	@Override
	public Boolean addService(LocalServices obj) {
		return repo.save(obj) != null ? true : false;
	}

	@Override
	public Boolean deleteService(Long service_id) {
		if(repo.existsById(service_id)) {
			repo.deleteById(service_id);
			return true;
		}
		return false;
	}

	@Override
	public List<LocalServices> getServices() {
		return repo.findAll();
	}

	@Override
	public LocalServices updateServices(Long service_id, LocalServices service) {
		
		LocalServices obj = repo.findById(service_id).get();
		
		if(Objects.nonNull(obj)) {
			if(service.getCategory() != null) {
				obj.setCategory(service.getCategory());
			}
			if(service.getDescription() != null) {
				obj.setDescription(service.getDescription());
			}
				
			return repo.save(obj);
		}
		return null;
	}

	@Override
	public LocalServices getServiceById(Long service_id) {
		return repo.findById(service_id).get();
	}

}
