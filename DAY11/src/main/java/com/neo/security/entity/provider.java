package com.neo.security.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.Table;

@Entity
//@Table(name='service_provider')
public class provider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public provider(int id, String email, String password, String firstName, String lastName, String username,
			String location, String role, String gender, long mobile, Date dob, String address, String category,
			String serviceProviding, int experience, String workinghour, int price) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.location = location;
		this.role = role;
		this.gender = gender;
		this.mobile = mobile;
		this.dob = dob;
		this.address = address;
		this.category = category;
		this.serviceProviding = serviceProviding;
		this.experience = experience;
		this.workinghour = workinghour;
		this.price = price;
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
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
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
	public String getWorkinghour() {
		return workinghour;
	}
	public void setWorkinghour(String workinghour) {
		this.workinghour = workinghour;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	private String email;
	private String password;
	private String firstName;
	private String lastName;
	private String username;
	private String location;
	private String role;
	private String gender;
	private long mobile;
	private Date dob;
	private String address;
	private String category;
	private String serviceProviding;
	private int experience;
	private String workinghour;
	private int price;
	
	
	public provider()
	{
		
	}

}
