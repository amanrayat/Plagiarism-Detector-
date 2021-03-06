package com.team208.jsonresponse;

import java.io.Serializable;

/**
 * response class to return status repsonse in json 
 * @author rachanatondare
 *
 */
public class StatusBean implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Integer statusCode;
	private String status;


	public Integer getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}




}
