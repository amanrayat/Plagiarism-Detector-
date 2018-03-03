package com.team208.service;

import com.team208.jsonResponse.LoginInput;
import com.team208.jsonResponse.LoginResponse;
import com.team208.jsonResponse.RegisterUserBean;

/**
 * Service layer
 * @author rachanatondare
 * @version 1.0.0
 */
public interface HomeService {
	
	/**
	 * 
	 * @param loginInput
	 * @return
	 * @throws Exception
	 */
	public LoginResponse loginUser( LoginInput loginInput) throws Exception;

	/**
	 * 
	 * @param registerInput
	 * @return
	 * @throws Exception
	 */
	public LoginResponse registerUser( RegisterUserBean registerInput) throws Exception;
	
	
}
