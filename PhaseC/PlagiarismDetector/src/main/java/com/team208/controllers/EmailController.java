package com.team208.controllers;

import java.util.List;
import java.util.logging.Logger;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.team208.jsonresponse.EmailJsonResponse;
import com.team208.jsonresponse.StatusBean;
import com.team208.utilities.Constants;

@CrossOrigin
@RestController
@RequestMapping(path="/team208")
public class EmailController {
	
	/**
	 * Logger
	 */
	private static final Logger LOGGER = Logger.getLogger(EmailController.class.getName());
	
	@Autowired
	private JavaMailSender sender;

	

	@RequestMapping(path="/Email", method = RequestMethod.POST)
	@ResponseBody StatusBean home(@RequestBody List<EmailJsonResponse> emails) {
		StatusBean status = new StatusBean();
	        try {
	        	
	        		
	       for(EmailJsonResponse s : emails) {
	    	 
	    	   		sendEmail(s.getEmail());
	       }
	            status.setStatus(Constants.SUCCESS_STATUS);
				status.setStatusCode(Constants.SUCCESS_STATUS_CODE);
	            

	        } catch (Exception e) {
	         	LOGGER.info(Constants.CONTEXT+e.getMessage());
	        		status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
				status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);

	        }
	        return status;
	    }

	    private void sendEmail(String email) {
	    	 MimeMessage message = null;
	    	try
	    	{
	    		message = sender.createMimeMessage();

	        // Enable the multipart flag!

	        MimeMessageHelper helper = new MimeMessageHelper(message, true);
	
	        helper.setTo(email);

	        helper.setText("<html><body>YOUR ARE CAUGHT!!!! <body></html>", true);

	        helper.setSubject("CAUGHT");
	   
		
	    	}

	    catch (Exception e) {
	    	LOGGER.info(Constants.CONTEXT+e.getMessage());

        }
	
	    	sender.send(message);
	    }


}
