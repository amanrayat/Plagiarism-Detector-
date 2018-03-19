package com.team208.domain;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;



@Entity
@Table(name = "Student")
public class StudentEntity {


	private String studentId;


	private String name;


	private String userRole;


	private String password;


	private String email;


	private Set<CourseEntity> courses;

	public  StudentEntity() {
		// Do nothing because of X and Y.

	}

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "STUDENTCOURSE", joinColumns = @JoinColumn(name = "studentId", referencedColumnName = "studentId"), inverseJoinColumns = @JoinColumn(name = "courseId", referencedColumnName = "courseId"))
	public Set<CourseEntity> getCourses() {
		return courses;
	}


	public void setCourses(Set<CourseEntity> courses) {
		this.courses = courses;
	}


	@Id
	@Column(name = "studentId", nullable = false)
	public String getStudentId() {
		return studentId;
	}


	public void setStudentId(String studentId) {
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
