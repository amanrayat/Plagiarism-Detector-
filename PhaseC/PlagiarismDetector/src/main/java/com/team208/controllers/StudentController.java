package com.team208.controllers;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team208.domain.CourseEntity;
import com.team208.domain.CourseRepository;
import com.team208.domain.StudentCourseEntity;
import com.team208.domain.StudentCourseRepository;
import com.team208.domain.StudentEntity;
import com.team208.domain.StudentRepository;

@Controller
@RequestMapping(path="/team208") 
public class StudentController {

	
	@Autowired 
	private StudentRepository studentRepository;
	
	@Autowired 
	private StudentCourseRepository studentCourseRepository;
	
	@Autowired 	
private CourseRepository courseRepository;
	 
	@CrossOrigin(origins = "http://localhost:3000")
	 @GetMapping(path="/registerStudentCourses") // Map ONLY GET Requests
		public @ResponseBody String addStudentCourses (@RequestParam Long userId, @RequestParam List<Integer> courseId) {
			// @ResponseBody means the returned String is the response, not a view name
			// @RequestParam means it is a parameter from the GET or POST request
		 StudentCourseEntity sce = new StudentCourseEntity();
		 StudentEntity n = studentRepository.findByNEUId(userId);
			
		 sce.setStudent(n);
			  Iterable<CourseEntity> regCourses = courseRepository.findAllById(courseId);
				
				for(CourseEntity c : regCourses) {
					
					sce.setCourse(c);
				}
				
				studentCourseRepository.save(sce);
				return "Saved";
		  

		 //register?userId='01226315'&name='rachana'&userRole='student'&password='zzeeddqq'&email='tondare@gmail.com'
				
		}
	
	 @CrossOrigin(origins = "http://localhost:3000")
	 @GetMapping(path="/allStudents")
		public @ResponseBody Iterable<StudentEntity> getAllUsers() {
			// This returns a JSON or XML with the users
			return studentRepository.findAll();
		}
	 
}
