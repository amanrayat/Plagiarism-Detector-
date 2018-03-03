package DaoImpl;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Repository;

import astGenerator.AstPrinter;
import astGenerator.ParserFacade;
import astGenerator.Python3Parser.File_inputContext;
import dao.UserHomePageDao;
import jsonResponse.CheckSimilarityBean;
import jsonResponse.CheckSimilarityResponse;
import jsonResponse.GetReportsResponseBean;
import jsonResponse.StatusBean;
import jsonResponse.UploadFileBean;
import jsonResponse.UploadFileBeanResponse;

@Repository
public class UserHomePageDaoImpl implements UserHomePageDao {

	/**
	 * @throws IOException 
	 * 
	 */
	//Method to send a filePath to the AST class so that it can generate the AST
	public File_inputContext returnAst(UploadFileBean fileData) throws IOException {
		//A dummy system filepath   
		 File file = new File("test.py");
		 File_inputContext	response= new ParserFacade().parse(file);
		 new AstPrinter().print(response);
		return response;

	}
	
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
	
	 public static void main(String[] args) throws IOException {
		new UserHomePageDaoImpl().returnAst(null);
	}
	
	
}
