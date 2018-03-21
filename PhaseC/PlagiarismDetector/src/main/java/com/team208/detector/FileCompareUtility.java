package com.team208.detector;

import java.io.FileInputStream;

public class FileCompareUtility {
    MD5Checksum md5EncoderUtil = new MD5Checksum();
   
    @SuppressWarnings("static-access")
	public void compare2Files(String actualFilePath, String expectedFilePath) throws Exception {
    	
        if (! md5EncoderUtil.encodeToMd5(actualFilePath).equals(md5EncoderUtil.encodeToMd5(expectedFilePath))){
        	    
        	ExecuteShellComand e=new ExecuteShellComand();
        	
        } else {
            System.out.println("The files- "+actualFilePath+" and "+expectedFilePath+" are identical");
        }
    }

//    public static void main(String[] args) throws Exception {
//    	String actualFileComparePath =  "/Users/harshmeet/Desktop/jplag/jplag_/directory_section01/Student1/tictactoe.py";
//    	String expectedFileComparePath =  "/Users/harshmeet/Desktop/jplag/jplag_/directory_section01/Student1/tictactoe.py";
//    	FileCompareUtility fileCompareUtil= new FileCompareUtility();
//    	System.out.println(fileCompareUtil.compare2Files(actualFileComparePath, expectedFileComparePath));
//
//    }
}
