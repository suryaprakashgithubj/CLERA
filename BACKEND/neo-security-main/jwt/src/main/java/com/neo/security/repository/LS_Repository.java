package com.neo.security.repository;

import java.lang.StackWalker.Option;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neo.security.entity.LocalServices;
//import com.neo.security.entity.User;

public interface LS_Repository extends JpaRepository<LocalServices, Long>{

	
}
