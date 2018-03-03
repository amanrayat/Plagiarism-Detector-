package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.AdminDao;
import jsonResponse.DeleteFileBean;
import jsonResponse.DeleteReportBean;
import jsonResponse.DeleteUserBean;
import jsonResponse.StatusBean;


@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	AdminDao adminDao;
	
	@Transactional
	public StatusBean deleteUser(DeleteUserBean deleteUser) throws Exception{
		return adminDao.deleteUser(deleteUser);
	}
	
	@Transactional
	public StatusBean deleteReport(DeleteReportBean deleteReport) throws Exception{
		return adminDao.deleteReport(deleteReport);
	}

	@Transactional
	public StatusBean deleteFile(DeleteFileBean deleteFile) throws Exception{
		return adminDao.deleteFile(deleteFile);
	}

}
