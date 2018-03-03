package DaoImpl;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import dao.HomeDao;
import jsonResponse.LoginInput;
import jsonResponse.LoginResponse;
import jsonResponse.RegisterUserBean;

@Repository
public class HomeDaoImpl implements HomeDao{

	public LoginResponse loginUser(LoginInput loginInput) throws Exception {

		
		LoginResponse response = null;
		
		response = new LoginResponse();
		
		return response;
	}
	

	public LoginResponse registerUser(RegisterUserBean registerInput) throws Exception {
			
		LoginResponse response = null;
		 
		 boolean userExistsFlag =  checkUserExists(registerInput.getEmailId());
		 
		 response = new LoginResponse();
		 if(userExistsFlag) {
			 response.setStatusCode(101);
			 
		 }else
		 {
			 response.setStatusCode(0);
		 }
		
		
		return response;
	}

	public boolean checkUserExists(String emailId) {
		
		//if user exists return true else false
		return false;
		}
	
	
	
}
