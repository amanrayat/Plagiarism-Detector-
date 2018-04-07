package com.team208.jsonresponse;

import java.io.Serializable;
import java.sql.Timestamp;

import com.team208.domain.AssignmentEntity;
import com.team208.domain.CourseEntity;

public class SubmissionResponseBean implements Serializable{


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int submissionId;
	public int getSubmissionId() {
		return submissionId;
	}

	public void setSubmissionId(int submissionId) {
		this.submissionId = submissionId;
	}

	private String gitLink;

	private String courseAbbr;
	
	private String assignmentName;
	
	private Timestamp submissionTime;

	public String getGitLink() {
		return gitLink;
	}

	public void setGitLink(String gitLink) {
		this.gitLink = gitLink;
	}

	

	public String getAssignmentName() {
		return assignmentName;
	}

	public void setAssignmentName(String assignmentName) {
		this.assignmentName = assignmentName;
	}

	public Timestamp getSubmissionTime() {
		return submissionTime;
	}

	public void setSubmissionTime(Timestamp submissionTime) {
		this.submissionTime = submissionTime;
	}

	public String getCourseAbbr() {
		return courseAbbr;
	}

	public void setCourseAbbr(String courseAbbr) {
		this.courseAbbr = courseAbbr;
	}

	
	

}
