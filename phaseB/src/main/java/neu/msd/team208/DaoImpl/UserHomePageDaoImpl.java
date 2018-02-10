package neu.msd.team208.DaoImpl;

import java.util.List;

import org.springframework.stereotype.Repository;

import neu.msd.team208.Dao.UserHomePageDao;
import neu.msd.team208.JsonResponse.CheckSimilarityBean;
import neu.msd.team208.JsonResponse.CheckSimilarityResponse;
import neu.msd.team208.JsonResponse.GetReportsResponseBean;
import neu.msd.team208.JsonResponse.StatusBean;
import neu.msd.team208.JsonResponse.UploadFileBean;
import neu.msd.team208.JsonResponse.UploadFileBeanResponse;

@Repository
public class UserHomePageDaoImpl implements UserHomePageDao {

	/**
	 * 
	 */
	public UploadFileBeanResponse uploadFiles(UploadFileBean fileData) throws Exception {
		
		UploadFileBeanResponse response = null;
				
		response = new UploadFileBeanResponse();
		return response;
	}

	/**
	 * 
	 */
	public GetReportsResponseBean getReports( List<Integer> userID) throws Exception {
		
		GetReportsResponseBean response = null;
		
		response = new  GetReportsResponseBean();
		
		return response;
	}

	
	/**
	 * 
	 */
	public CheckSimilarityResponse checkSimilarity(CheckSimilarityBean filesData) throws Exception {
		
		CheckSimilarityResponse response = null;
		
		response = new  CheckSimilarityResponse();
		
		return response;
		
		
	}

	/**
	 * 
	 */
	public StatusBean email(String emailId) throws Exception {
		
		StatusBean status = null;
		
		status = new StatusBean();
		return status;
	}
	
	 
	
	
}
