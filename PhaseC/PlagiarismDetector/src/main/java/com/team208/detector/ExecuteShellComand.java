package com.team208.detector;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.logging.Logger;
import com.team208.detector.GitRepoDownload;
import com.team208.detector.ReportGenerator;

//This class is used to execute Jplag and run comparison 
public class ExecuteShellComand {
	private static final  Logger logger = Logger.getLogger(ExecuteShellComand.class.getName());
	private ExecuteShellComand() {
		super();
	}
	/**
	 * 
	 * @param course
	 * @param hw
	 * @return String
	 * @throws IOException 
	 */
	public static String getComparison(String course, String hw, Double threshold) throws IOException {
		//Download the jar and run the plagiarism
		GitRepoDownload.downloadJar("https://github.com/jplag/jplag/releases/download/v2.11.9-SNAPSHOT/jplag-2.11.9-SNAPSHOT-jar-with-dependencies.jar");
		String command="java -jar jplag-2.11.9-SNAPSHOT-jar-with-dependencies.jar -l python3 -r -target/"+ "results"+course+"_"+ hw + " ";
		//Store the results
		command = command +"DownloadedReports/"+ course+"/"+hw+"actual";
		StringBuilder output = new StringBuilder();
		Process p;
		try {
			p = Runtime.getRuntime().exec(command);
			p.waitFor();
			BufferedReader reader =
					new BufferedReader(new InputStreamReader(p.getInputStream()));
			String line = "";
			while ((line = reader.readLine())!= null) {
				output.append(line + "\n");
			}

		} catch (Exception e) {
			logger.info("Context : "+ "No directories found to parse");
		}
		//Setting default threshold, if no threshold values are recieved, then default threshold is set 
		if(threshold==0.0d) {
			threshold=0.5d;
		}
		return ReportGenerator.setThreshold(threshold,course,hw);

	}
	


}
