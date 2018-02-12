package neu.msd.team208.Helper;


import org.apache.commons.logging.LogFactory;
import org.apache.log4j.Logger;

import neu.msd.team208.controller.AdminPageController;

public class SimilarityCheckAlgorithm {
	
	private static final Logger logger = (Logger) LogFactory.getLog(AdminPageController.class);
	
	public void printSimilar(String[] lineOfCode) {
		
		logger.info(lineOfCode);
	}

}
