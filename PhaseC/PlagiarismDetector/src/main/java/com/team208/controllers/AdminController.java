package com.team208.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team208.domain.CourseEntity;
import com.team208.domain.CourseRepository;
import com.team208.domain.UserEntity;
import com.team208.domain.UserRepository;


@CrossOrigin
@Controller
@RequestMapping(path="/team208") 
public class AdminController {

	@Autowired 
	private CourseRepository courseRepository;

	@Autowired 
	private UserRepository userRepository;

	@GetMapping(path="/allCourses")
	public @ResponseBody Iterable<CourseEntity> getAllCourses() {
		// This returns a JSON or XML with the users
		return courseRepository.findAll();
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<UserEntity> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}
}
