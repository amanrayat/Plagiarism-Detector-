package com.team208.jsonResponse;

import java.io.Serializable;
import java.util.Set;

import com.team208.domain.StudentCourseEntity;

public class StudentEntityResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int studentDBid; 

	private Long studentId;


	private String name;


	private String userRole;


	private String password;


	private String email;


	private Set<StudentCourseEntity> studentcourse;


	public int getStudentDBid() {
		return studentDBid;
	}


	public void setStudentDBid(int studentDBid) {
		this.studentDBid = studentDBid;
	}


	public Long getStudentId() {
		return studentId;
	}


	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getUserRole() {
		return userRole;
	}


	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Set<StudentCourseEntity> getStudentcourse() {
		return studentcourse;
	}


	public void setStudentcourse(Set<StudentCourseEntity> studentcourse) {
		this.studentcourse = studentcourse;
	}
	

}
