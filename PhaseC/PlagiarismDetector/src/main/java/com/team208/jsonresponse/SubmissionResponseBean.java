package com.team208.jsonresponse;

import java.io.Serializable;
import java.sql.Timestamp;

import com.team208.domain.AssignmentEntity;

public class SubmissionResponseBean implements Serializable{


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	private String gitLink;

	private AssignmentEntity assignmentId;
	
	private Timestamp submissionTime;

	public String getGitLink() {
		return gitLink;
	}

	public void setGitLink(String gitLink) {
		this.gitLink = gitLink;
	}

	public AssignmentEntity getAssignmentId() {
		return assignmentId;
	}

	public void setAssignmentId(AssignmentEntity assignmentId) {
		this.assignmentId = assignmentId;
	}

	public Timestamp getSubmissionTime() {
		return submissionTime;
	}

	public void setSubmissionTime(Timestamp submissionTime) {
		this.submissionTime = submissionTime;
	}
	
	
	

}
