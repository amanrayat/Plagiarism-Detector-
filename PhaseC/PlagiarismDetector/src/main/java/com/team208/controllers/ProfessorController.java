package com.team208.controllers;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.team208.detector.ExecuteShellComand;
import com.team208.detector.GitRepoDownload;
import com.team208.domain.AssignmentEntity;
import com.team208.domain.AssignmentRepository;
import com.team208.domain.CourseEntity;
import com.team208.domain.CourseRepository;
import com.team208.domain.UserEntity;
import com.team208.domain.UserRepository;
import com.team208.jsonresponse.CourseJsonBean;
import com.team208.jsonresponse.StatusBean;
import com.team208.utilities.Constants;

@CrossOrigin
@Controller
@RequestMapping(path="/team208") 
public class ProfessorController {

	/**
	 * Logger
	 */
	private static final Logger LOGGER = Logger.getLogger(ProfessorController.class.getName());
	@Autowired 
	private UserRepository userRepository;

	@Autowired 
	private CourseRepository courseRepository;

	@Autowired
	private AssignmentRepository assignmentRepository;


	@RequestMapping("/generateReport")
	@ResponseBody
	public String generateReport() {

		String gitLink = "https://github.com/amanrayat/testRepo.git";
		List<String> hwlist = new ArrayList<>();

		hwlist.add("homework1");

		hwlist.add("homework2");

		hwlist.add("homework3");

		HashMap<String, String> studentRepo = new HashMap<>();

		studentRepo.put("student001", gitLink);

		studentRepo.put("student002", "https://github.com/amanrayat/testRepo.git");

		studentRepo.put("student003", gitLink);

		studentRepo.put("student004", "https://github.com/CSSE120StartingCode/IntroductionToPython.git");

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

						LOGGER.info(Constants.CONTEXT+e.getMessage());

					}

			}

		}

		ExecuteShellComand.main(new String[0]);

		return "star"  ;
	}

	@RequestMapping(path="/addAssignment", method = RequestMethod.GET  )  // Map ONLY GET Requests
	public @ResponseBody StatusBean addAssignment (@RequestParam int courseId, @RequestParam int assignmentNo, @RequestParam String assignmentName, @RequestParam String date) {
		StatusBean status = new StatusBean();
		try {
			AssignmentEntity assignment = new AssignmentEntity();

			CourseEntity course = courseRepository.findById(courseId);
			assignment.setAssignmentCourse(course);
			assignment.setAssignmentName(assignmentName);
			assignment.setAssignmentNo(assignmentNo);
			SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy-MM-dd");//dd/MM/yyyy HH:mm:ss

			Date endDate = sdfDate.parse(date);
			assignment.setSubmissionDate(endDate);

			assignmentRepository.save(assignment);
			status.setStatus(Constants.SUCCESS_STATUS);
			status.setStatusCode(Constants.SUCCESS_STATUS_CODE);

		}catch (Exception e) {

			LOGGER.info(Constants.CONTEXT+e.getMessage());
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);

		}
		return status;
	}

	@RequestMapping(path="/addCourse", method = RequestMethod.POST) // Map ONLY GET Requests
	public @ResponseBody StatusBean addCourse (@RequestBody CourseJsonBean course) {
		StatusBean status = new StatusBean();
		try {

			UserEntity professor = userRepository.findByNEUId(course.getCreatedCourseBy());

			CourseEntity n = new CourseEntity();
			n.setCreatedCourseBy(professor);
			n.setCourseAbbr(course.getCourseAbbr());
			n.setCourseLoc(course.getCourseLoc());
			n.setCourseName(course.getCourseName());
			n.setCourseTerm(course.getCourseTerm());

			courseRepository.save(n);
			status.setStatus(Constants.SUCCESS_STATUS);
			status.setStatusCode(Constants.SUCCESS_STATUS_CODE);

		}catch (Exception e) {

			LOGGER.info(Constants.CONTEXT+e.getMessage());
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);

		}
		return status;
	}

	@RequestMapping(path="/updateCourse", method = RequestMethod.PUT ) // Map ONLY GET Requests
	public @ResponseBody StatusBean updateCourse (@RequestParam Long userId, @RequestParam int courseId, @RequestParam String courseAbr, @RequestParam String loc, @RequestParam String name,
			@RequestParam String term) {
		
		StatusBean status = new StatusBean();
		try {
			if(courseRepository.existsById(courseId)) {
				
				UserEntity professor = userRepository.findByNEUId(userId);
				int userDBId = professor.getUserDBid();
				if(userRepository.existsById(userDBId)) {
				CourseEntity n = courseRepository.findById(courseId);
				n.setCreatedCourseBy(professor);
				n.setCourseAbbr(courseAbr);
				n.setCourseLoc(loc);
				n.setCourseName(name);
				n.setCourseTerm(term);

				courseRepository.save(n);
				status.setStatus(Constants.SUCCESS_STATUS);
				status.setStatusCode(Constants.SUCCESS_STATUS_CODE);
				}else {
					status.setStatus(Constants.UNREGISTERED_STATUS);
					status.setStatusCode(Constants.UNREGISTERED_STATUS_CODE);
				}
			}else {
				status.setStatus(Constants.UNAVAILABLE_COURSE);
				status.setStatusCode(Constants.UNAVAILABLE_COURSE_CODE);

			}
		}catch (Exception e) {

			LOGGER.info(Constants.CONTEXT+e.getMessage());
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);

		}
		return status;
	}


	@RequestMapping(path="/updateAssignment", method = RequestMethod.PUT ) // Map ONLY GET Requests
	public @ResponseBody StatusBean updateAssignment (@RequestParam int assignmentId,@RequestParam int courseId, @RequestParam int assignmentNo, @RequestParam String assignmentName, @RequestParam String date) {
		
		StatusBean status = new StatusBean();
		try {
			
			if(assignmentRepository.existsById(assignmentId)) {
				AssignmentEntity assignment = assignmentRepository.findById(assignmentId);


				CourseEntity course = courseRepository.findById(courseId);
				if(courseRepository.existsById(courseId)) {
					status.setStatus(Constants.UNAVAILABLE_COURSE);
					status.setStatusCode(Constants.UNAVAILABLE_COURSE_CODE);
				}
				assignment.setAssignmentCourse(course);
				assignment.setAssignmentName(assignmentName);
				assignment.setAssignmentNo(assignmentNo);
				SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy-MM-dd-HH:mm:ss");//dd/MM/yyyy HH:mm:ss

				Date endDate = sdfDate.parse(date);
				assignment.setSubmissionDate(endDate);

				assignmentRepository.save(assignment);
				status.setStatus(Constants.SUCCESS_STATUS);
				status.setStatusCode(Constants.SUCCESS_STATUS_CODE);
			}else {
				status.setStatus(Constants.UNAVAILABLE);
				status.setStatusCode(Constants.UNAVAILABLE_CODE);
			}


		}catch (Exception e) {

			LOGGER.info(Constants.CONTEXT+e.getMessage());
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);

		}
		return status;
	}

	@RequestMapping(path="/deletCourse", method = RequestMethod.GET  ) 
	public @ResponseBody  StatusBean deleteCourse(@RequestParam int courseId){
		StatusBean status = new StatusBean();
		try {
			if(courseRepository.existsById(courseId)) {
				courseRepository.deleteById(courseId);
				status.setStatus(Constants.SUCCESS_STATUS);
				status.setStatusCode(Constants.SUCCESS_STATUS_CODE);
			}
			else {
				status.setStatus(Constants.UNAVAILABLE_COURSE);
				status.setStatusCode(Constants.UNAVAILABLE_COURSE_CODE);
			}

		}catch (Exception e) {

			LOGGER.info(Constants.CONTEXT+e.getMessage());
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);

		}
		return status;

	}

	@RequestMapping(path="/deletAssignment", method = RequestMethod.GET  ) 
	public @ResponseBody  StatusBean deletAssignment(@RequestParam int assignmentId){
		StatusBean status = new StatusBean();
		try {
			if(assignmentRepository.existsById(assignmentId)) {
				assignmentRepository.deleteById(assignmentId);
				status.setStatus(Constants.SUCCESS_STATUS);
				status.setStatusCode(Constants.SUCCESS_STATUS_CODE);
			}else {
				status.setStatus(Constants.UNAVAILABLE);
				status.setStatusCode(Constants.UNAVAILABLE_CODE);
			}

		}catch (Exception e) {

			LOGGER.info(Constants.CONTEXT+e.getMessage());
			status.setStatus(Constants.FAILURE_EXCEPTION_STATUS);
			status.setStatusCode(Constants.FAILURE_EXCEPTION_STATUS_CODE);

		}
		return status;

	}

	
}
