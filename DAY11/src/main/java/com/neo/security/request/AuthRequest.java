package com.neo.security.request;

import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequest {

	@Email
	@Length(min = 5,max = 50)
	private String email;
	@Length(min = 5,max = 15)
	private String password;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public AuthRequest(@Email @Length(min = 5, max = 50) String email, @Length(min = 5, max = 15) String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	public AuthRequest() {
		
	}
	
	
	
	
}
