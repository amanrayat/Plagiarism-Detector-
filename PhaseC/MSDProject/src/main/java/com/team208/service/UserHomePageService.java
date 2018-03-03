package com.team208.service;

import java.util.List;

import com.team208.jsonResponse.CheckSimilarityBean;
import com.team208.jsonResponse.CheckSimilarityResponse;
import com.team208.jsonResponse.GetReportsResponseBean;
import com.team208.jsonResponse.StatusBean;
import com.team208.jsonResponse.UploadFileBean;
import com.team208.jsonResponse.UploadFileBeanResponse;



/**
 * Service layer
 * @author rachanatondare
 * @version 1.0.0
 */
public interface UserHomePageService {
	
	/**
	 * 
	 * @param fileData
	 * @return
	 * @throws Exception
	 */
	public UploadFileBeanResponse uploadFiles(UploadFileBean fileData) throws Exception;
	
	/**
	 * 
	 * @param filesData
	 * @return
	 * @throws Exception
	 */
	public CheckSimilarityResponse checkSimilarity(CheckSimilarityBean filesData) throws Exception;
	
	/**
	 * 
	 * @param userID
	 * @return
	 * @throws Exception
	 */
	public GetReportsResponseBean getReports( List<Integer> userID) throws Exception;

	/**
	 * 
	 * @param emailId
	 * @return
	 */
	public StatusBean email(String emailId) throws Exception;

}
