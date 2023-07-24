package com.neo.security.repository;

import java.lang.StackWalker.Option;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.LocalServices;
import com.neo.security.entity.User;

public interface LS_Repository extends JpaRepository<LocalServices, Integer>{

	
}
