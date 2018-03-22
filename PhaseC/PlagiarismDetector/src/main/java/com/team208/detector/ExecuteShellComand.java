package com.team208.detector;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.nio.file.Paths;

public class ExecuteShellComand {

	public static void main(String[] args) throws IOException {
		ExecuteShellComand obj = new ExecuteShellComand();

		String command="java -jar jplag-2.11.9-SNAPSHOT-jar-with-dependencies.jar -l python3 -r -s ";
		String execCommand = command + obj.getPath("CS5500" , "homework1");
		String output = obj.executeCommand(execCommand);
		System.out.println("output: "+output);
	}

	public Path getPath(String course, String hw) throws IOException {
		Path path = Paths.get(course+"/"+hw);
		return path;
	}
	private String executeCommand(String command) {

		StringBuffer output = new StringBuffer();

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
			e.printStackTrace();
		}

		return output.toString();

	}

}