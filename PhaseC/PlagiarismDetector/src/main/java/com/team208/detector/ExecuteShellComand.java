package com.team208.detector;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.util.logging.Level;
import java.util.logging.Logger;

public class ExecuteShellComand {
	
	private static final  Logger logger = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

	private ExecuteShellComand() {
		super();
	}

	public static void main(String[] args) {
		getComparison( "CS5500",  "homework1");
		
	}
	/**
	 * 
	 * @param course
	 * @param hw
	 * @return String
	 */
	public static   String getComparison(String course, String hw) {
		String command="java -jar jplag-2.11.9-SNAPSHOT-jar-with-dependencies.jar -l python3 -r -target/results ";
		command = command +"target/DownloadedReports/"+ course+"/"+hw;
		
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
			logger.log(Level.INFO, "No directories found to parse");
		}

		
		return output.toString();

	}


}
