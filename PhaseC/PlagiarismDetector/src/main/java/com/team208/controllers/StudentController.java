package com.team208.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
	 
	 
	 @GetMapping(path="/registerStudentCourses") // Map ONLY GET Requests
		public @ResponseBody String addStudentCourses (@RequestParam StudentEntity userId, @RequestParam List<Integer> courseId) {
			// @ResponseBody means the returned String is the response, not a view name
			// @RequestParam means it is a parameter from the GET or POST request
		 
		 StudentCourseEntity sce = new StudentCourseEntity();
		 
//		Optional<StudentEntity> n =  studentRepository.findById(userId);
//		  if(!n.isPresent()) {
//			  
//		  }else
//		  {
//			  sce.setStudent(n);
//		  }

		 //register?userId='01226315'&name='rachana'&userRole='student'&password='zzeeddqq'&email='tondare@gmail.com'
			
			
			 Iterable<CourseEntity> regCourses = courseRepository.findAllById(courseId);
			
			for(CourseEntity c : regCourses) {
				
				sce.setCourse(c);
			}
			 sce.setStudent(userId);
			studentCourseRepository.save(sce);
			return "Saved";
		}
}
