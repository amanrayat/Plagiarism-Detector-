package com.team208.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.team208.dao.UserHomePageDao;
import com.team208.jsonResponse.CheckSimilarityBean;
import com.team208.jsonResponse.CheckSimilarityResponse;
import com.team208.jsonResponse.GetReportsResponseBean;
import com.team208.jsonResponse.StatusBean;
import com.team208.jsonResponse.UploadFileBean;
import com.team208.jsonResponse.UploadFileBeanResponse;


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
