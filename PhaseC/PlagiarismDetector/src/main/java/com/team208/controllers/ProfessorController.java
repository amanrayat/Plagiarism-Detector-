package com.team208.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team208.domain.CourseRepository;
import com.team208.jsonresponse.StatusBean;
import com.team208.detector.GitRepoDownload;
import com.team208.detector.ExecuteShellComand;

@CrossOrigin
@Controller
@RequestMapping(path="/team208") 
public class ProfessorController {

	/**
	 * Logger
	 */
	private static final Logger LOGGER = Logger.getLogger(ProfessorController.class.getName());

	@Autowired 
	private CourseRepository courseRepository;
	@RequestMapping("/generateReport")
	@ResponseBody
	public String generateReport() throws IOException {
		String gitLink = "https://github.com/amanrayat/testRepo.git";
		List<String> hwlist = new ArrayList<>();
		hwlist.add("homework1");
		hwlist.add("homework2");
		hwlist.add("homework3");
		HashMap<String, String> studentRepo = new HashMap<>();
		studentRepo.put("student001", gitLink);
		studentRepo.put("student002", "https://github.com/enrolled02/python-crawler");
		studentRepo.put("student003", gitLink);
		studentRepo.put("student004", "https://github.com/enrolled02/python-crawler");
		String hw;
		String course;
		List<String> courses = new ArrayList<>();
		courses.add("CS5500");
		courses.add("CS6200");
		courses.add("CS5800");
		for(int k =0; k<courses.size();k++) {
			course = courses.get(k);
			for(int j=0;j<hwlist.size();j++) {
				hw = hwlist.get(j);
				for(Map.Entry<String, String> entry: studentRepo.entrySet())
					try {
						GitRepoDownload.downloadRepo(course,hw,entry.getKey(),entry.getValue());
					} catch (IOException e) {
						LOGGER.info("Context : "+e.getMessage());
					}
			}

		}
		return ExecuteShellComand.getComparison("CS5500","homework1",75.0d); 
	}
	@RequestMapping("/deletCourse")
	public @ResponseBody  StatusBean deleteCourse(@RequestParam int courseId){
		StatusBean status = new StatusBean();
		try {
			if(courseRepository.existsById(courseId)) {
				courseRepository.deleteById(courseId);
				status.setStatus("Success");
				status.setStatusCode(200);
			}
		}catch (Exception e) {

			LOGGER.info("Context : "+e.getMessage());
			status.setStatus("Failure");
			status.setStatusCode(400);

		}
		return status;

	}

}
