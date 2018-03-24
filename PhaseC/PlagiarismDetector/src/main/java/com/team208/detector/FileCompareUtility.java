package com.team208.detector;

import java.io.FileInputStream;

public class FileCompareUtility {
    MD5Checksum md5EncoderUtil = new MD5Checksum();
   
    @SuppressWarnings("static-access")
	public boolean compare2Files(FileInputStream actualFilePath, FileInputStream expectedFilePath) throws Exception {
//        if (md5EncoderUtil.createChecksum(actualFilePath).hashCode()==((md5EncoderUtil.createChecksum(expectedFilePath).hashCode()))){
//            System.out.println("The files- "+actualFilePath+" and "+expectedFilePath+" are same");
        	System.out.println(md5EncoderUtil.createChecksum(actualFilePath));
        	System.out.println(md5EncoderUtil.createChecksum(expectedFilePath));

            return true;
//        } else {
////            System.out.println("The files- "+actualFilePath+" and "+expectedFilePath+" are NOT same");
//            return false;
//        }
    }

    public static void main(String[] args) throws Exception {
    	FileInputStream actualFileComparePath = new FileInputStream( "/Users/harshmeet/Desktop/jplag/jplag_/directory_section01/Student1/tictactoe.py");
    	FileInputStream expectedFileComparePath = actualFileComparePath;
    	FileCompareUtility fileCompareUtil= new FileCompareUtility();
    	System.out.println(fileCompareUtil.compare2Files(actualFileComparePath, expectedFileComparePath));

    }
}
