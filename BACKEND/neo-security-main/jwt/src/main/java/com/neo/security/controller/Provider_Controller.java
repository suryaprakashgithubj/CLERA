package com.neo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Provider;
import com.neo.security.service.ProviderImpl;

import lombok.RequiredArgsConstructor;
//import net.bytebuddy.description.annotation.AnnotationDescription.Loadable;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/provider")
public class Provider_Controller {
    @Autowired
	private  ProviderImpl serv;

	@GetMapping("/get")
	public List<Provider> getInfos() {
		return serv.getProviders();
	}

	@GetMapping("/get-specific/{category}/{location}")
	public List<Provider> getSpecific(@PathVariable String category, @PathVariable String location) {
		return serv.getProviderSpecific(category, location);
	}

	@GetMapping("/get/{email}")
	public Provider getInfoByEmail(@PathVariable String email) {
		return serv.getProviderByEmail(email);
	}

	@PostMapping("/add")
	public Boolean updatingSchedule(@RequestBody Provider obj) {
		return serv.updatingSchedule(obj);
	}

	@PutMapping("/update/{email}")
	public Provider updatingSc(@PathVariable String email, @RequestBody Provider obj) {
		return serv.updateLocalServiceProvider(email, obj);
	}
	
	@DeleteMapping("/delete/{id}")
	public Boolean deleteById(@PathVariable int id) {
		return serv.deleteProvider(id);
	}
	
}
