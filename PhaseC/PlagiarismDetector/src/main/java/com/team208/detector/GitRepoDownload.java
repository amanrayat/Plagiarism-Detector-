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

import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.errors.GitAPIException;


public class GitRepoDownload {
	
	public static void main( String[] args ) 
	{
		List<String> hwlist = new ArrayList();
		hwlist.add("homework1");
		hwlist.add("homework2");
		hwlist.add("homework3");

		HashMap<String, String> studentRepo = new HashMap();
		studentRepo.put("student001", "https://github.com/mevdschee/python-tictactoe");
		studentRepo.put("student002", "https://github.com/ReekenX/python-tic-tac-toe");
		studentRepo.put("student003", "https://github.com/so4pmaker/tictactoe");
		studentRepo.put("student004", "https://github.com/emilyaviva/simple-python-tic-tac-toe");
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
					downloadRepo(course,hw,entry.getKey(),entry.getValue());
			}
		}
		/**
		 * Example Usage:
		 * app.downloadRepo("CS5500","homework1","student005","https://github.com/viha-bidre/Tasktracker.git");
		 */
	}

	public static void downloadRepo(String course, String hw,String studentID, String gitRepoLink) {
		String current;
		try {
			current = new java.io.File( "." ).getCanonicalPath();

			Path path = Paths.get(current+"/"+course+"/"+hw);

			Files.createDirectories(path);

			File localPath = File.createTempFile(studentID+"-", "",new File(path.toString()));

			if(!localPath.delete()) {
				throw new IOException("Could not delete temporary file " + localPath);
			}

			System.out.println("Cloning from " + gitRepoLink + " to " + localPath);

			Git result = Git.cloneRepository()
					.setURI(gitRepoLink)
					.setDirectory(localPath)
					.call() ;

			// Note: the call() returns an opened repository already which needs to be closed to avoid file handle leaks!
			System.out.println("Having repository: " + result.getRepository());

		} catch (GitAPIException|IOException e) {
			e.printStackTrace();
		} 
	}
}
