package com.team208.domain;

import java.io.Serializable;

public class StudentCourseId implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private CourseEntity course;
	
	private StudentEntity student;

	public CourseEntity getCourse() {
		return course;
	}

	public void setCourse(CourseEntity course) {
		this.course = course;
	}

	public StudentEntity getStudent() {
		return student;
	}

	public void setStudent(StudentEntity student) {
		this.student = student;
	}
}
