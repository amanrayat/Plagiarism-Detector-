package controllersTest;



import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.powermock.core.classloader.annotations.PowerMockIgnore;
import org.powermock.modules.junit4.PowerMockRunner;
import org.springframework.beans.factory.annotation.Autowired;

import com.team208.controllers.MainController;
import com.team208.domain.AssignmentRepository;
import com.team208.domain.AssignmentSubmissionRepository;
import com.team208.domain.CourseRepository;
import com.team208.domain.UserEntity;
import com.team208.domain.UserRepository;
import com.team208.jsonresponse.AllSubmissionResponse;
import com.team208.jsonresponse.LoginJsonBean;
import com.team208.jsonresponse.LoginResponse;
import com.team208.jsonresponse.StatusBean;
import com.team208.jsonresponse.UserJsonBean;
import com.team208.userservice.UserServiceImpl;

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.management.*","org.mockito.*", "org.apache.http.*", "org.apache.http.conn.ssl.*", "javax.net.ssl.*" , "javax.crypto.*"})
public class MainControllerTest{

	
	
	private MainController mc = new MainController();
	private UserServiceImpl userService = new UserServiceImpl();
	@Test()
	public void test1(){ 
		
		
		Long userId = (long) 001226315;
		
		UserEntity u = new UserEntity();
		u.setEmail("r.t@gmail.com");
		u.setName( "rachana");
		u.setPassword("pass");
		u.setUserRole("Student");
		u.setUserId(userId);
		assertEquals("rachana", u.getName());
	
	}

	@Test()
	public void test2(){ 
		LoginResponse stud = new LoginResponse();
		Long userId  = (long) 123;
		stud = userService.findStudent(userId);

	}


	@Test()
	public void test3(){ 
		LoginResponse stud = new LoginResponse();
		Long userId  = (long) 123;
		String password = "pass";
		LoginJsonBean jsonBean = new LoginJsonBean();
		jsonBean.setPassword(password);
		jsonBean.setUserId(userId);
		stud= userService.login(jsonBean);

	}

	
	@Test()
	public void test5(){ 
		//AllSubmissionResponse users = mc.allSubmissionsByCourse("DM5500", 2);	
	}
	
	@Test()
	public void test6(){ 
		String codename = "CS5500";
	//	AllSubmissionResponse users = mc.allSubmissionsByCourse(codename, 1);	
		//System.out.println( "CODE "+ users.getStatus().getStatusCode());
	}
	
	
	
}
