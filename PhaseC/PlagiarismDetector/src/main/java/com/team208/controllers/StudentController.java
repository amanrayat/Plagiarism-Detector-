package com.team208.controllers;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
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
import com.team208.jsonresponse.StatusBean;

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

	@Autowired
	private UserCourseRepository userCourseRepository;

	
	@GetMapping(path="/registerStudentCourses") // Map ONLY GET Requests
	public @ResponseBody StatusBean addStudentCourses (@RequestParam Long userId, @RequestParam List<Integer> courseId) {
		StatusBean status = null;
		try {	

			Iterable<CourseEntity> regCourses = courseRepository.findAllById(courseId);
			for(CourseEntity c1 : regCourses) {

				UserCourseEntity uc = new UserCourseEntity();
				uc.setUser(userRepository.findByNEUId(userId));
				uc.setCourse(c1);
				userCourseRepository.save(uc);	
			}
			status = new StatusBean();
			status.setStatus("Success");
			status.setStatusCode(200);

		}
		catch (Exception e) {
			logger.info("Context : "+e.getMessage());
			status = new StatusBean();
			status.setStatus("Failure");
			status.setStatusCode(400);
		}

		return status;

	}

	
	@RequestMapping(path="/getCourses")
	public @ResponseBody  Set<CourseEntity> getCourses(@RequestParam long userId){
		UserEntity user = userRepository.findByNEUId(userId);
		int id = user.getUserDBid();
		Set<CourseEntity> courses = new  HashSet<>();
		Iterable<UserCourseEntity> cs = userCourseRepository.findCourseById(id);
		Iterator<UserCourseEntity> itr = cs.iterator();
		while(itr.hasNext()) {
			courses.add(itr.next().getCourse());
		}
		return courses;
		
	}

	@GetMapping(path="/allStudents")
	public @ResponseBody Iterable<UserEntity> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}

}
