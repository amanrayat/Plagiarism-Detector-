package com.team208.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.team208.dao.AdminDao;
import com.team208.jsonResponse.DeleteFileBean;
import com.team208.jsonResponse.DeleteReportBean;
import com.team208.jsonResponse.DeleteUserBean;
import com.team208.jsonResponse.StatusBean;



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
