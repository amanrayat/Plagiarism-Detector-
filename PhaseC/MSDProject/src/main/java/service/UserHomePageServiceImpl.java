package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import dao.UserHomePageDao;
import jsonResponse.CheckSimilarityBean;
import jsonResponse.CheckSimilarityResponse;
import jsonResponse.GetReportsResponseBean;
import jsonResponse.StatusBean;
import jsonResponse.UploadFileBean;
import jsonResponse.UploadFileBeanResponse;


/**
 * Service layer implemntation
 * @author rachanatondare
 * @version 1.0.0
 */
public class UserHomePageServiceImpl implements UserHomePageService{
	
	/**
	 * Dao layer
	 */
	@Autowired
	UserHomePageDao userHomeDao;

	@Transactional	
	public UploadFileBeanResponse uploadFiles(UploadFileBean fileData) throws Exception {
		
		return userHomeDao.uploadFiles(fileData);
	}

	/**
	 * 
	 */
	@Transactional	
	public CheckSimilarityResponse checkSimilarity(CheckSimilarityBean filesData) throws Exception {
		
		return userHomeDao.checkSimilarity(filesData);
	}

	/**
	 * 
	 */
	@Transactional	
	public GetReportsResponseBean getReports(List<Integer> userID) throws Exception {

		return userHomeDao.getReports(userID);
	}

	
	public StatusBean email(String emailId) throws Exception {
	
		return userHomeDao.email(emailId);
	}

}
