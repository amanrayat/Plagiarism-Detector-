package com.team208.jsonresponse;

import java.io.Serializable;

public class UpdateSubmissionRequestBean implements Serializable{


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int submissionId;
	
	private int assignmentId;

	private Long studentId;
	
	private String gitLink;

	public String getGitLink() {
		return gitLink;
	}

	public void setGitLink(String gitLink) {
		this.gitLink = gitLink;
	}

	public int getSubmissionId() {
		return submissionId;
	}

	public void setSubmissionId(int submissionId) {
		this.submissionId = submissionId;
	}

	public int getAssignmentId() {
		return assignmentId;
	}

	public void setAssignmentId(int assignmentId) {
		this.assignmentId = assignmentId;
	}

	public Long getStudentId() {
		return studentId;
	}

	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}
}
