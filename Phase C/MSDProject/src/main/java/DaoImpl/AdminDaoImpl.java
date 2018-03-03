package DaoImpl;

import org.springframework.stereotype.Repository;

import dao.AdminDao;
import jsonResponse.DeleteFileBean;
import jsonResponse.DeleteReportBean;
import jsonResponse.DeleteUserBean;
import jsonResponse.StatusBean;

@Repository
public class AdminDaoImpl implements dao.AdminDao{

	public StatusBean deleteUser(DeleteUserBean deleteuser) throws Exception {
		StatusBean statusBean = null;

		statusBean = new StatusBean();

		return statusBean;
	}

	public StatusBean deleteReport(DeleteReportBean deleteReport) throws Exception {
		StatusBean statusBean = null;

		statusBean = new StatusBean();

		return statusBean;
	}

	public StatusBean deleteFile(DeleteFileBean deleteFile) throws Exception {
		StatusBean statusBean = null;

		statusBean = new StatusBean();

		return statusBean;
	}

}
