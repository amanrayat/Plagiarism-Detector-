package com.team208.service;

import com.team208.jsonResponse.DeleteFileBean;
import com.team208.jsonResponse.DeleteReportBean;
import com.team208.jsonResponse.DeleteUserBean;
import com.team208.jsonResponse.StatusBean;

/**
 * Admin Operations Service Layer
 * @author vihabidre
 *
 */
public interface AdminService {
	
	/**
	 * 
	 * @param deleteUser
	 * @return
	 */
	StatusBean deleteUser(DeleteUserBean deleteUser) throws Exception;
	
	/**
	 * 
	 * @param deleteReport
	 * @return
	 */
	StatusBean deleteReport(DeleteReportBean deleteReport) throws Exception;
	
	/**
	 * 
	 * @param deleteFile
	 * @return
	 */
	StatusBean deleteFile(DeleteFileBean deleteFile) throws Exception;
}
