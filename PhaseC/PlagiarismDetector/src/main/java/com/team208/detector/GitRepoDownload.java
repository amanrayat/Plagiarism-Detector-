package com.team208.detector;



import java.io.File;

import java.io.IOException;

import java.nio.file.Files;

import java.nio.file.Path;

import java.nio.file.Paths;

import java.util.logging.Logger;

import org.eclipse.jgit.api.Git;

import org.eclipse.jgit.api.errors.GitAPIException;

public class GitRepoDownload {
	
	private GitRepoDownload() {
	    throw new IllegalStateException("Utility class");
	  }
	
	private static final Logger LOGGER = Logger.getLogger(GitRepoDownload.class.getName());
	

	
	public static  void downloadRepo(String course, String hw,String studentID, String gitRepoLink) throws  IOException{

		String current;

		String filePath = "/";


		try {

			current = new java.io.File( "." ).getCanonicalPath();

			Path path = Paths.get(current+"/DownloadedReports/"+filePath+course+filePath+hw);


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