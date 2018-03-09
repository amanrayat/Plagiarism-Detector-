package com.team208.domain;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "COURSE")
public class CourseEntity {
	
	private int courseId;
	
	
	private String courseName;
	
	
	private String courseAbbr;
	
	
	private String courseTerm;
	
	
	private String courseLoc;
	
	private Set<StudentEntity> students;

	
	 @ManyToMany(mappedBy = "courses")
	public Set<StudentEntity> getStudents() {
		return students;
	}

	public void setStudents(Set<StudentEntity> students) {
		this.students = students;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getCourseId() {
		return courseId;
	}

	@Column(name = "courseName", nullable = false)
	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	@Column(name = "courseAbbr", nullable = false)
	public String getCourseAbbr() {
		return courseAbbr;
	}

	public void setCourseAbbr(String courseAbbr) {
		this.courseAbbr = courseAbbr;
	}

	@Column(name = "courseTerm", nullable = false)
	public String getCourseTerm() {
		return courseTerm;
	}

	public void setCourseTerm(String courseTerm) {
		this.courseTerm = courseTerm;
	}

	@Column(name = "courseLoc", nullable = false)
	public String getCourseLoc() {
		return courseLoc;
	}

	
	public void setCourseLoc(String courseLoc) {
		this.courseLoc = courseLoc;
	}

}
