package neu.msd.team208.DaoImpl;

import org.springframework.stereotype.Repository;

import neu.msd.team208.Dao.AdminDao;
import neu.msd.team208.JsonResponse.DeleteFileBean;
import neu.msd.team208.JsonResponse.DeleteReportBean;
import neu.msd.team208.JsonResponse.DeleteUserBean;
import neu.msd.team208.JsonResponse.StatusBean;

@Repository
public class AdminDaoImpl implements AdminDao{

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
