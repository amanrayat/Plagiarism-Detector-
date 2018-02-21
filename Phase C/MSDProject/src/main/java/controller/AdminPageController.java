package controller;

import org.apache.commons.logging.LogFactory;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import jsonResponse.DeleteFileBean;
import jsonResponse.DeleteReportBean;
import jsonResponse.DeleteUserBean;
import jsonResponse.StatusBean;
import service.AdminService;


/**
 *  controller for user admin home page APIs
 * @author rachanatondare
 *
 */
@Controller
public class AdminPageController {

	/**
	 * Logger
	 */
	private static final Logger logger = (Logger) LogFactory.getLog(AdminPageController.class);
	private static final String EXCEPTION_MESSAGE = "Exception";

	@Autowired
	AdminService adminService;

	/**
	 * 
	 * @param deleteUser
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteUser", method = RequestMethod.PUT)
	public StatusBean deleteUser(
			@RequestBody final DeleteUserBean deleteUser) 
			throws Exception{
		StatusBean statusBean = null;
		try {

			statusBean = adminService.deleteUser(deleteUser);

		} catch (Exception e) {
		
			logger.info(EXCEPTION_MESSAGE, e);
		}

		return statusBean;
		
	}
	
	/**
	 * 
	 * @param deleteReport
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteReport", method = RequestMethod.PUT)
	public StatusBean deleteReport(
			@RequestBody final DeleteReportBean deleteReport) 
			throws Exception{
		
		StatusBean statusBean = null;
		try {

			statusBean = adminService.deleteReport(deleteReport);

		} catch (Exception e) {
		
			logger.info(EXCEPTION_MESSAGE, e);
		}

		return statusBean;

	}
	
	/**
	 * 
	 * @param deleteFile
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteFiles", method = RequestMethod.PUT)
	public StatusBean deleteFiles(
			@RequestBody final DeleteFileBean deleteFile) 
			throws Exception {
		StatusBean statusBean = null;
		try {

			statusBean = adminService.deleteFile(deleteFile);

		} catch (Exception e) {
		
			logger.info(EXCEPTION_MESSAGE, e);
		}

		return statusBean;
	}
}
