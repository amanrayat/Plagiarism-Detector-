package com.team208.userservice;




import com.team208.jsonresponse.LoginJsonBean;
import com.team208.jsonresponse.LoginResponse;
import com.team208.jsonresponse.StatusBean;
import com.team208.jsonresponse.UserJsonBean;


public interface UserService {
	
	
	public LoginResponse login( LoginJsonBean userDetails); 
	
	public StatusBean register(UserJsonBean user);
	
	public LoginResponse findStudent( Long userId ) ;

}
