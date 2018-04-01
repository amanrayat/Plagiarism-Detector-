package com.team208.detector;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
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
	
	private ReportGenerator() {
		super();
	}
	/**
	 * 
	 * @param threshold
	 * @return
	 * @throws IOException
	 */
	public static String  setThreshold(Double threshold) throws IOException  {
		String	content = new String ( Files.readAllBytes( Paths.get("/Users/harshmeet/untitledfolder3/-target/results/index.html").toAbsolutePath() ) );
		Document doc=Jsoup.parse(content);
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
				Elements thresholdString=e.select("font");
				Double thresholdFromFile = Double.parseDouble(thresholdString.text().replaceAll("[()%]",""));
				if (thresholdFromFile >= threshold) {
					//cols.remove(e);
//					e.append("    ");
					String temp ="<bgcolor=\"#FF0000\">"+ "<b>"+e.html()+ "</b>";
					content = content.replace(e.html(), temp);
				}
			}
		}
		for(int i = 0 ; i < rows2.size(); i++) {
			Element row2=rows2.get(i);
			Elements cols2=row2.select("td");
			for(int k=2;k<cols2.size();k++) {
				Element e1=cols2.get(k);
				Elements thresholdedString=e1.select("font");
				Double thresholdedFromFile1 = Double.parseDouble(thresholdedString.text().replaceAll("[()%]",""));
				if (thresholdedFromFile1 >= threshold) {
					String temp ="<bgcolor=\"#FF0000\">"+ "<b>"+e1.html()+ "</b>";
					content = content.replace(e1.html(), temp);

//					cols2.remove(e1);
				}
			}
		}
		content= content.replace(tempTable.html(), table1.html());
		content = content.replace(tempTable2.html(), table2.html());
		return content;
	}

	public static void main(String[] args) throws IOException {
		ReportGenerator gen =new ReportGenerator();
		System.out.println(gen.setThreshold(86.0d));

	}

}
