package com.team208;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.team208.controllers.AdminController2;
import com.team208.domain.UserEntity;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PlagiarismDetectorApplicationTests {
	
	
	@Autowired
	AdminController2 adminController;
	
	@Test
	public void contextLoads() {
	}
	
	@Test
	public void insertFaculty() {
//		"userId": 2563,
//        "name": "Harshu",
//        "userRole": "Student",
//        "password": "pass",
//        "email": "harshmeet@gmail.com"
//		Long userId, String name, String userRole, String password, String email
		UserEntity f1 = new UserEntity((long) 2563,"Harshu","Student","pass","harshu@gmail.com");
		adminController.createUser(f1);
		
	}


	

}
