package com.team208.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.team208.dao.HomeDao;
import com.team208.jsonResponse.LoginInput;
import com.team208.jsonResponse.LoginResponse;
import com.team208.jsonResponse.RegisterUserBean;



/**
 * service layer for homepage operations
 * @author rachanatondare
 *
 */
@Service
public class HomeServiceImpl implements HomeService{
	
	
	/**
	 * Dao layer
	 */
	@Autowired
	HomeDao homeDao;

	@Transactional	
	public LoginResponse loginUser(LoginInput loginInput) throws Exception {
	
		return homeDao.loginUser(loginInput);
	}

	@Transactional
	public LoginResponse registerUser(RegisterUserBean registerInput) throws Exception {
		return homeDao.registerUser(registerInput);
	}


	

}
