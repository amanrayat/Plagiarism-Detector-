package com.team208.s3.services.impl;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.services.s3.transfer.MultipleFileUpload;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.team208.s3.services.S3Services;

@Service
public class S3ServicesImpl implements S3Services {

	private Logger logger = LoggerFactory.getLogger(S3ServicesImpl.class);

	@Autowired
	private AmazonS3 s3client;

	@Value("${jsa.s3.bucket}")
	private String bucketName;

	/**
	 * This function is used to download the file
	 * The Keyname is the name of the key by which is file was 
	 * uploaded to the s3 
	 * The file key of the file will be (*folderKey* /name of the file)
	 */

	@Override
	public void downloadFile(String keyName) {

		byte[] buffer;
		try {
			S3Object s3object = s3client.getObject(bucketName, keyName);
			S3ObjectInputStream inputStream = s3object.getObjectContent();
			buffer = new byte[inputStream.available()];
			inputStream.read(buffer);
			FileUtils.copyInputStreamToFile(inputStream, new File("src/main/resources/test2.html"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * This function is used to upload the complete folder 
	 * to the s3
	 * @param dir_path is the path of the directory to be uploaded 
	 * @param key_prefix is the key of the directory 
	 * @param buket_name is the name of the bucket 
	 * @param recursive is the parameter which tells to upload the sub folders 
	 */
	@Override
	public void uploadDirectory(String dir_path,String key_prefix,String bucket_name,Boolean recursive) {
		TransferManager xfer_mgr = new TransferManager();

		MultipleFileUpload xfer = xfer_mgr.uploadDirectory(bucket_name, key_prefix, new File(dir_path), recursive);
		try {
			xfer.waitForCompletion();
		} catch(AmazonServiceException e) {
			System.err.println("Amazon sevice error:"+ e.getMessage());
			System.exit(1);
		} catch (AmazonClientException e) {
			System.err.println("Amazon client error:"+ e.getMessage());
			System.exit(1);		e.printStackTrace();
		} catch (InterruptedException e) {
			System.err.println("Transfer interrupted:"+ e.getMessage());
			System.exit(1);		e.printStackTrace();
		}

		xfer_mgr.shutdownNow();
	}
}
