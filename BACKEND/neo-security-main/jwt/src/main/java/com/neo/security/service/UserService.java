package com.neo.security.service;

import java.util.List;

import com.neo.security.entity.Feedback;
import com.neo.security.entity.User;


public interface UserService {
	
	Boolean addUser(User user);

	List<User> getAllUsers();
	
	User getUserByEmail(String email);
	
	Boolean addFeedback(Feedback obj);
}
