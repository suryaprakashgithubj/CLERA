package com.neo.security.entity;


public class Feedback {
	
	private String email;
	
	private String comment;
	
	private String name;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Feedback(String email, String comment, String name) {
		super();
		this.email = email;
		this.comment = comment;
		this.name = name;
	}
	
	public Feedback() {}
	
}
