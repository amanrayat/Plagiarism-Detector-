package com.team208.jsonresponse;

import java.io.Serializable;


import com.team208.domain.CourseEntity;

public class AssignmentJsonBean implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int courseId;
	
	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	private String assignmentName;
	
	private CourseEntity assignmentCourse;
	
	private String submissionDate;

	public String getAssignmentName() {
		return assignmentName;
	}

	public void setAssignmentName(String assignmentName) {
		this.assignmentName = assignmentName;
	}

	public CourseEntity getAssignmentCourse() {
		return assignmentCourse;
	}

	public void setAssignmentCourse(CourseEntity assignmentCourse) {
		this.assignmentCourse = assignmentCourse;
	}

	public String getSubmissionDate() {
		return submissionDate;
	}

	public void setSubmissionDate(String submissionDate) {
		this.submissionDate = submissionDate;
	}


}
