package com.team208.controllers;

import com.team208.jsonresponse.AllSubmissionResponse;

public class Main {
	private static MainController mc ;
	public static void main(String[] args) {
		mc  = new MainController();
		String course = "CS5500";
		AllSubmissionResponse users = mc.allSubmissionsByCourse(course, 1);	
		
		System.out.println("" + users.getStatus().getStatusCode());

	}

}
