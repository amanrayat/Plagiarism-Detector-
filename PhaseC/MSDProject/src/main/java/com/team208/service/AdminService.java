package service;

import jsonResponse.DeleteFileBean;
import jsonResponse.DeleteReportBean;
import jsonResponse.DeleteUserBean;
import jsonResponse.StatusBean;

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
