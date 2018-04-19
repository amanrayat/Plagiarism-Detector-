package com.team208.userservice;

import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.team208.domain.UserEntity;
import com.team208.domain.UserRepository;
import com.team208.jsonresponse.LoginJsonBean;
import com.team208.jsonresponse.LoginResponse;
import com.team208.jsonresponse.StatusBean;
import com.team208.jsonresponse.UserJsonBean;
import com.team208.utilities.Constants;

@Service
public class UserServiceImpl implements UserService{

	/**
	 * Logger
	 */
	private static final Logger logger = 
			Logger.getLogger(UserServiceImpl.class.getName());
	
	@Autowired 
	private UserRepository userRepository;
	
	@Override
	public LoginResponse login(LoginJsonBean userDetails) {
		LoginResponse response = null;
		StatusBean statusbean = new StatusBean();
		UserEntity n = null;
		try {
			n = userRepository.findByNEUId(userDetails.getUserId());
			if(n != null) {

				if(userDetails.getPassword().equals(n.getPassword())) {
					response = new LoginResponse();
					response.setUser(n);
					statusbean.setStatus(Constants.SUCCESS_STATUS);
					statusbean.setStatusCode(Constants.SUCCESS_STATUS_CODE);
					response.setStatus(statusbean);
				}
				else {
					response = new LoginResponse();
					response.setUser(n);
					statusbean.setStatus(Constants.INCORRECT_CREDENTIALS);
					statusbean.setStatusCode(Constants.INCORRECT_CREDENTIALS_CODE);
					response.setStatus(statusbean);
				}
			}else {
				response = new LoginResponse();
				response.setUser(n);
				statusbean.setStatus(Constants.UNREGISTERED_STATUS);
				statusbean.setStatusCode(Constants.UNREGISTERED_STATUS_CODE);
				response.setStatus(statusbean);
			}

		} catch (Exception e) {
			logger.info(Constants.CONTEXT+e.getMessage());
			response = new LoginResponse();
			response.setUser(n);
			statusbean.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			statusbean.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);
			response.setStatus(statusbean);

		}

		return response  ;

	}

	@Override
	public StatusBean register(UserJsonBean user) {
		StatusBean status = new StatusBean();
		try {
			UserEntity n = new UserEntity();

			n.setUserId(user.getUserId());
			n.setName(user.getName());
			n.setUserRole(user.getUserRole());
			n.setPassword(user.getPassword());
			n.setEmail(user.getEmail());

			userRepository.save(n);

			status.setStatus(Constants.SUCCESS_STATUS);
			status.setStatusCode(Constants.SUCCESS_STATUS_CODE);

		}catch (Exception e) {

			logger.info(Constants.CONTEXT+e.getMessage());
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);
		}

		return status;
	}

	@Override
	public LoginResponse findStudent(Long userId) {
		LoginResponse response = null;
		StatusBean status = new StatusBean();
		UserEntity n = null;
		try {
			n = userRepository.findByNEUId(userId);
			if(n != null) {

				response = new LoginResponse();
				response.setUser(n);
				status.setStatus(Constants.SUCCESS_STATUS);
				status.setStatusCode(Constants.SUCCESS_STATUS_CODE);
				response.setStatus(status);

			}else {
				response = new LoginResponse();
				response.setUser(n);
				status.setStatus(Constants.UNREGISTERED_STATUS);
				status.setStatusCode(Constants.UNREGISTERED_STATUS_CODE);
				response.setStatus(status);
			}
		}catch (Exception e) {
			logger.info(Constants.CONTEXT+e.getMessage());
			response = new LoginResponse();
			response.setUser(n);
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);
			response.setStatus(status);

		}
			return response;
	}

	@Override
	public LoginResponse findByEmail(String email) {
		LoginResponse response = null;
		StatusBean status = new StatusBean();
		UserEntity n = null;
		try {
			n = userRepository.findByEmail(email);
			if(n != null) {

				response = new LoginResponse();
				response.setUser(n);
				status.setStatus(Constants.SUCCESS_STATUS);
				status.setStatusCode(Constants.SUCCESS_STATUS_CODE);
				response.setStatus(status);

			}else {
				response = new LoginResponse();
				response.setUser(n);
				status.setStatus(Constants.UNREGISTERED_STATUS);
				status.setStatusCode(Constants.UNREGISTERED_STATUS_CODE);
				response.setStatus(status);
			}
		}catch (Exception e) {
			logger.info(Constants.CONTEXT+e.getMessage());
			response = new LoginResponse();
			response.setUser(n);
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);
			response.setStatus(status);

		}
			return response;
		
	}
	
	
	

}
