package com.team208.controllers;


import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team208.domain.CourseEntity;
import com.team208.domain.CourseRepository;
import com.team208.domain.UserCourseEntity;
import com.team208.domain.UserCourseRepository;
import com.team208.domain.UserEntity;
import com.team208.domain.UserRepository;

@CrossOrigin
@Controller
@RequestMapping(path="/team208") 
public class StudentController {

	private static final Logger logger = 
			Logger.getLogger(StudentController.class.getName());

	@Autowired 
	private UserRepository userRepository;

	@Autowired 
	private CourseRepository courseRepository;



	//@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(path="/registerStudentCourses") // Map ONLY GET Requests
	public @ResponseBody String addStudentCourses (@RequestParam Long userId, @RequestParam List<Integer> courseId) {
		String status = "";
		try {	

			Iterable<CourseEntity> regCourses = courseRepository.findAllById(courseId);

			for(CourseEntity c1 : regCourses) {

				UserCourseEntity uc = new UserCourseEntity();

				uc.setUser(userRepository.findByNEUId(userId));
				uc.setCourse(c1);

				status ="Saved Courses";
			}

			
		}
		catch (Exception e) {
			logger.info("Context : "+e.getMessage());
			status ="UnSaved";

		}

		return status;


		//register?userId='01226315'&name='rachana'&userRole='student'&password='zzeeddqq'&email='tondare@gmail.com'

	}


	@GetMapping(path="/allStudents")
	public @ResponseBody Iterable<UserEntity> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}

}
