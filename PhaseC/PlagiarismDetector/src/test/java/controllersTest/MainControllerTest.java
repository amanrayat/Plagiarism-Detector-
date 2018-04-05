package controllersTest;



import org.junit.Test;

import com.team208.controllers.MainController;
import com.team208.domain.UserEntity;
import com.team208.jsonresponse.AllSubmissionResponse;
import com.team208.jsonresponse.LoginJsonBean;
import com.team208.jsonresponse.LoginResponse;
import com.team208.jsonresponse.StatusBean;
import com.team208.jsonresponse.UserJsonBean;


public class MainControllerTest{

	private MainController mc = new MainController();
	@Test()
	public void test1(){ 
		UserJsonBean u = new UserJsonBean();
		StatusBean status = new StatusBean();
		Long userId = (long) 001226315;
		String name = "rachana";
		String userRole = "student";
		String password = "zzeeddqq";
		String email = "r.t@gmail.com";
		u.setUserId(userId);
		u.setEmail(email);
		u.setName(name);
		u.setPassword(password);
		u.setUserRole(userRole);
		status = mc.addNewUser(u);

	}

	@Test()
	public void test2(){ 
		LoginResponse stud = new LoginResponse();
		Long userId  = (long) 123;
		stud= mc.findStudent(userId);

	}


	@Test()
	public void test3(){ 
		LoginResponse stud = new LoginResponse();
		Long userId  = (long) 123;
		String password = "pass";
		LoginJsonBean jsonBean = new LoginJsonBean();
		jsonBean.setPassword(password);
		jsonBean.setUserId(userId);
		stud= mc.login(jsonBean);

	}

	
	@Test()
	public void test5(){ 
		AllSubmissionResponse users = mc.allSubmissionsByCourse("DM5500", 2);	
	}
	
	@Test()
	public void test6(){ 
		AllSubmissionResponse users = mc.allSubmissionsByCourse("DM5500", 2);	
	}
	
}
