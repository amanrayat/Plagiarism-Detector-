package com.team208.domain;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;
import javax.persistence.Table;




@Entity
@Table(name = "student")
public class StudentEntity {


	private int studentDBid; 

	private Long studentId;


	private String name;


	private String userRole;


	private String password;


	private String email;


	private Set<StudentCourseEntity> studentcourse;



	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
	public Set<StudentCourseEntity> getStudentcourse() {
		return studentcourse;
	}

	public void setStudentcourse(Set<StudentCourseEntity> studentcourse) {
		this.studentcourse = studentcourse;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getStudentDBid() {
		return studentDBid;
	}

	
	public void setStudentDBid(int studentDBid) {
		this.studentDBid = studentDBid;
	}

	@Column(name = "student_id", nullable = false,  unique = true)
	public Long getStudentId() {
		return studentId;
	}

	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}

	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}

	

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "userRole", nullable = false)
	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
