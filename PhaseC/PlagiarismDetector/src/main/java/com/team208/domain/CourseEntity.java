package com.team208.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "course")
public class CourseEntity implements Serializable{


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	private int courseId;
	
	
	private String courseName;
	
	
	private String courseAbbr;
	
	
	private String courseTerm;
	
	
	private String courseLoc;
	
	private Set<UserCourseEntity> usercourse = new HashSet<>();

	
	//@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE   }, mappedBy = "usercourse")
	
	 @OneToMany( mappedBy = "course" )
	public Set<UserCourseEntity> getUsercourse() {
		return usercourse;
	}


	public void setUsercourse(Set<UserCourseEntity> usercourse) {
		this.usercourse = usercourse;
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
