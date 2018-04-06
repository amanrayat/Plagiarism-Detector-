package com.team208.s3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.team208.s3.services.S3Services;

@SpringBootApplication
public class SpringS3AmazonApplication implements CommandLineRunner{

	@Autowired
	S3Services s3Services;
	
//	@Value("${jsa.s3.uploadfile}")
//	private String uploadFilePath;
	
	@Value("${jsa.s3.key}")
	private String uploadKey;
	
	@Value("${jsa.s3.bucket}")
	private String bucket;
		
	private String downloadKey = "s3uploadtest3/test2.html";
	
	@Override
	public void run(String... args) throws Exception {
		
//		s3Services.uploadDirectory(uploadFilePath,"s3uploadtest3",bucket,false);
//		s3Services.downloadFile(downloadKey);
	}
}
