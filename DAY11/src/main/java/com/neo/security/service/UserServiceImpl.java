package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.neo.security.entity.User;
import com.neo.security.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public Boolean addUser(User user) {
		
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		
		User user1 = new User();
		
		user1.setFirstName(user.getFirstName());
		user1.setLastName(user.getLastName());
		user1.setUsername(user.getUsername());
		user1.setPassword(encodedPassword);
		user1.setEmail(user.getEmail());
		user1.setGender(user.getGender());
		user1.setDob(user.getDob());
		user1.setAddress(user.getAddress());
		user1.setMobile(user.getMobile());
		user1.setLocation(user.getLocation());
		
				
				
				
		
		return repo.save(user1)!=null ? true:false;
	}

	@Override
	public List<User> getAllUsers() {
		return repo.findAll();
	}

	@Override
	public User getUserByEmail(String email) {
	
		return repo.findByEmail(email).get();
	}
	
	

}
