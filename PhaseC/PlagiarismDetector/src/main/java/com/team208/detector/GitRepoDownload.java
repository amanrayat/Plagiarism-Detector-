package com.team208.detector;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;


public class GitRepoDownload {
	
	private static final Logger LOGGER = Logger.getLogger(GitRepoDownload.class.getName());
	
	public static void main( String[] args ) 
	{
		List<String> hwlist = new ArrayList();
		hwlist.add("homework1");
		hwlist.add("homework2");
		hwlist.add("homework3");

		HashMap<String, String> studentRepo = new HashMap();
		studentRepo.put("student001", "https://github.com/spring-guides/tut-react-and-spring-data-rest");
		studentRepo.put("student002", "https://github.com/viha-bidre/Java-Design_Pattern.git");
		studentRepo.put("student003", "https://github.com/viha-bidre/hangman2");
		studentRepo.put("student004", "https://github.com/viha-bidre/Tasktracker.git");
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
						downloadRepo(course,hw,entry.getKey(),entry.getValue());
					} catch (IOException e) {
						LOGGER.info("Context : "+e.getMessage());
					}
			}
		}
		/**
		 * Example Usage:
		 * app.downloadRepo("CS5500","homework1","student005","https://github.com/viha-bidre/Tasktracker.git");
		 */
	}

	public static void downloadRepo(String course, String hw,String studentID, String gitRepoLink) throws  IOException{
		String current;
		String filePath = "/";
		try {
			current = new java.io.File( "." ).getCanonicalPath();

			Path path = Paths.get(current+filePath+course+filePath+hw);

			Files.createDirectories(path);

			File localPath = File.createTempFile(studentID+"-", "",new File(path.toString()));
			 
			Files.delete(localPath.toPath());

			Git.cloneRepository()
					.setURI(gitRepoLink)
					.setDirectory(localPath)
					.call() ;

		} catch (GitAPIException|IOException e) {
			LOGGER.info("Context : "+e.getMessage());
		} 
	}
}
