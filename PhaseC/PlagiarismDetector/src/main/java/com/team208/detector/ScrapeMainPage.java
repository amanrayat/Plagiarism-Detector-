package com.team208.detector;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
public class ScrapeMainPage {



	public String readFile() throws IOException {
		String content = "";

		content = new String ( Files.readAllBytes( Paths.get("-s/index.html").toAbsolutePath() ) );

		Document doc=Jsoup.parse(content);

		Elements removeImage = doc.select("img").remove();
		Elements removeH1 = doc.select("h1").remove();
		Element body = doc.body();
		String bodyContent=body.toString();



		try {
			File file = new File("Finalresults2.html");

			boolean fvar = file.createNewFile();
			if (fvar){
				FileWriter writer = new FileWriter(file);
				writer.write(bodyContent);

				writer.write(" ");
				writer.close();			
				System.out.println("results have been created successfully");
			}
			else{
				System.out.println("File with same name already present at the specified location");
			}
		} catch (IOException e) {
			System.out.println("Exception Occurred:");
			e.printStackTrace();
		}
		System.out.println(bodyContent);
		return "";
	}

	public static void main (String[] args) throws IOException {
		ScrapeMainPage p =new  ScrapeMainPage();
		System.out.println(p.readFile());
	}
}

