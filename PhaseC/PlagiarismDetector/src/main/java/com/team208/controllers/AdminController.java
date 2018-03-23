package com.team208.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team208.domain.CourseEntity;
import com.team208.domain.CourseRepository;
import com.team208.domain.StudentEntity;


@Controller
@RequestMapping(path="/team208") 
public class AdminController {

	@Autowired 
	private CourseRepository courseRepository;

	//addCourse?courseAbr='CS5500'&loc='BOS'&name='MSD'&term='Spring2018'
	@GetMapping(path="/addCourse") // Map ONLY GET Requests
	public @ResponseBody String addCourse (@RequestParam String courseAbr, @RequestParam String loc, @RequestParam String name,
			@RequestParam String term) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		//register?userId='01226315'&name='rachana'&userRole='student'&password='zzeeddqq'&email='tondare@gmail.com'
		CourseEntity n = new CourseEntity();
		n.setCourseAbbr(courseAbr);
		n.setCourseLoc(loc);
		n.setCourseName(name);
		n.setCourseTerm(term);

		courseRepository.save(n);
		return "Saved";
	}
}
