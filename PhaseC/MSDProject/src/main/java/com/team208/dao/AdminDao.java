package dao;

import jsonResponse.DeleteFileBean;
import jsonResponse.DeleteReportBean;
import jsonResponse.DeleteUserBean;
import jsonResponse.StatusBean;

/**
 *  interface for admin functionalities
 * @author rachanatondare
 *
 */
public interface AdminDao {
	
	/**
	 * 
	 * @param deleteuser
	 * @return
	 * @throws Exception
	 */
	StatusBean deleteUser(DeleteUserBean deleteuser) throws Exception;
	
	/**
	 * 
	 * @param deleteReport
	 * @return
	 * @throws Exception
	 */
	StatusBean deleteReport(DeleteReportBean deleteReport) throws Exception;
	
	/**
	 * 
	 * @param deleteFile
	 * @return
	 * @throws Exception
	 */
	StatusBean deleteFile(DeleteFileBean deleteFile) throws Exception;
}
