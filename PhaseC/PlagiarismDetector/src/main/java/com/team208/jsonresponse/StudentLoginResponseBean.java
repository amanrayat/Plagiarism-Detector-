package com.team208.jsonresponse;

import java.io.Serializable;

public class StudentLoginResponseBean implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	private StatusBean status;
	
	private StudentEntityResponse studentEntity;

	public StatusBean getStatus() {
		return status;
	}

	public void setStatus(StatusBean status) {
		this.status = status;
	}

	public StudentEntityResponse getStudentEntity() {
		return studentEntity;
	}

	public void setStudentEntity(StudentEntityResponse studentEntity) {
		this.studentEntity = studentEntity;
	}
	
}
