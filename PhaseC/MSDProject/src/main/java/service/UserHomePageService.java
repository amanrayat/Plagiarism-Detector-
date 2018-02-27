package service;

import java.util.List;

import jsonResponse.CheckSimilarityBean;
import jsonResponse.CheckSimilarityResponse;
import jsonResponse.GetReportsResponseBean;
import jsonResponse.StatusBean;
import jsonResponse.UploadFileBean;
import jsonResponse.UploadFileBeanResponse;


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
