package com.team208.detector;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
/**
 * 
 * @author harshmeet
 *
 */
public class ReportGenerator {

	protected static Map<String, Double>avergeSimilaritystudentMap=new TreeMap<>();
	protected static Map<String, Double>maxSimilaritystudentMap=new TreeMap<>();


	private ReportGenerator() {
		super();
	}



	public static void getAllStudents() throws IOException {
		String	content = new String ( Files.readAllBytes( Paths.get("/Users/harshmeet/Desktop/untitledfolder3/results/index.html").toAbsolutePath() ) );
		Document doc=Jsoup.parse(content);
		doc.select("img").remove();
		Elements rows=doc.select("table").get(0).select("tr");
		Element row=rows.get(2);
		Elements td=row.select("td");
		Elements students=td.select("code");
		String[] s=students.text().split(" - ");
		for(int j=0;j<s.length;j++) {
			avergeSimilaritystudentMap.put(s[j], 0.0d);
			maxSimilaritystudentMap.put(s[j], 0.0d);
		}
	}
	/**
	 * 
	 * @param threshold
	 * @return
	 * @throws IOException
	 */
	public static String  setThreshold(Double threshold) throws IOException  {
		getAllStudents();
		String	content = new String ( Files.readAllBytes( Paths.get("/Users/harshmeet/Desktop/untitledfolder3/results/index.html").toAbsolutePath() ) );

		Document doc=Jsoup.parse(content);
		doc.select("img").remove();
		content = doc.html();
		Element table1=doc.select("table").get(2);
		Element table2=doc.select("table").get(3);
		Element tempTable = table1;
		Element tempTable2=table2;
		Elements rows = table1.select("tr");
		Elements rows2=table2.select("tr");
		for(int i=0;i<rows.size();i++) {
			Element row = rows.get(i);
			Elements cols = row.select("td");
			for(int j=2;j<cols.size();j++) {
				Element e = cols.get(j);
				String studentID=e.select("a").text();
				Elements thresholdString=e.select("font");
				Double thresholdFromFile = Double.parseDouble(thresholdString.text().replaceAll("[()%]",""));
				Double studentScore = Math.max(thresholdFromFile, avergeSimilaritystudentMap.getOrDefault(studentID, 0.0d));
				avergeSimilaritystudentMap.put(studentID,studentScore);
				if (thresholdFromFile >= threshold) {
					String temp ="<td bgcolor= #FFFF00\">"+ "<font color=\"#fff\">" + "<b>"+e.html()+ "</b>"+"</font>"+"</td>";
					content = content.replace(e.html(), temp);
				}
			}
		}
		for(int i = 0 ; i < rows2.size(); i++) {
			Element row2=rows2.get(i);
			Elements cols2=row2.select("td");
			for(int k=2;k<cols2.size();k++) {
				Element e1=cols2.get(k);
				String studentID1=e1.select("a").text();
				Elements thresholdedString=e1.select("font");
				Double thresholdedFromFile1 = Double.parseDouble(thresholdedString.text().replaceAll("[()%]",""));
				Double maxStudentScore=Math.max(thresholdedFromFile1, maxSimilaritystudentMap.getOrDefault(studentID1, 0.0d));
				maxSimilaritystudentMap.put(studentID1,maxStudentScore);
				if (thresholdedFromFile1 >= threshold) {
					String temp ="<td bgcolor= #FFFF00\">"+ "<font color=\"#fff\">" + "<b>"+e1.html()+ "</b>"+"</font>"+"</td>";
					content = content.replace(e1.html(), temp);

				}
			}
		}

		content= content.replace(tempTable.html(), table1.html());
		content = content.replace(tempTable2.html(), table2.html());
		return content;
	}

//	public static void main(String[] args) throws IOException {
//		ReportGenerator gen =new ReportGenerator();
//		System.out.println(gen.setThreshold(3.0d));
//		System.out.println(avergeSimilaritystudentMap);
//		System.out.println(maxSimilaritystudentMap);
//
//
//	}

}
