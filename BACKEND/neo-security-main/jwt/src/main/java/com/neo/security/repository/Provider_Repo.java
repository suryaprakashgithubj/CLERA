package com.neo.security.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.security.web.authentication.rememberme.RememberMeAuthenticationException;

import com.neo.security.entity.Provider;

public interface Provider_Repo extends JpaRepository<Provider, Integer>{

	@Query(value = "SELECT u FROM Provider u WHERE u.category=?1 and u.location=?2")
	List<Provider> findByCategoryAndLocation(String category, String location);
	
	Optional<Provider> findByEmail(String email);

}
