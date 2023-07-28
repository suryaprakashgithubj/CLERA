package com.neo.security.entity;

import java.sql.Date;
//import java.util.List;

//import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;

//@Data
//@Builder
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
@Entity
public class Provider {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	public Provider(int id, String email, String password, String firstName, String lastName, String username,
			String location, String charRole, String gender, Long phoneNumber, Date dob, String address,
			String category, String serviceProviding, int experience, String workingHour, int price) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.location = location;
		this.charRole = charRole;
		this.gender = gender;
		this.phoneNumber = phoneNumber;
		this.dob = dob;
		this.address = address;
		this.category = category;
		this.serviceProviding = serviceProviding;
		this.experience = experience;
		this.workingHour = workingHour;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCharRole() {
		return charRole;
	}

	public void setCharRole(String charRole) {
		this.charRole = charRole;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getServiceProviding() {
		return serviceProviding;
	}

	public void setServiceProviding(String serviceProviding) {
		this.serviceProviding = serviceProviding;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getWorkingHour() {
		return workingHour;
	}

	public void setWorkingHour(String workingHour) {
		this.workingHour = workingHour;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Column(nullable = false, unique = true, length = 50)
	private String email;

	@Column(nullable = false, length = 64)
	private String password;

	private String firstName;

	 private String lastName;

	private String username;

	private String location;

	private String charRole;

	private String gender;

	private Long phoneNumber;

	private Date dob;
	
	private String address;
	
	private String category;
	
	private String serviceProviding;
	
	private int experience;
	
	private String workingHour;
	
	private int price;
	
	public Provider()
	{
		
	}






















































































































































































































































































































}
