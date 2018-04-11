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

@RunWith(PowerMockRunner.class)
@PowerMockIgnore({"javax.management.*","org.mockito.*", "org.apache.http.*", "org.apache.http.conn.ssl.*", "javax.net.ssl.*" , "javax.crypto.*"})
public class MainControllerTest{

	@Autowired 
	private UserRepository userRepository;
	
	@Autowired 
	private CourseRepository courseRepository;

	@Autowired 
	private AssignmentSubmissionRepository submissionRepository;
	
	@Autowired
	private AssignmentRepository assignmentRepository;
	
	private MainController mc = new MainController();
	@Test()
	public void test1(){ 
		
		StatusBean status = new StatusBean();
		Long userId = (long) 001226315;
		String name = "rachana";
		String userRole = "student";
		String password = "zzeeddqq";
		String email = "r.t@gmail.com";
		UserJsonBean u = new UserJsonBean(userId, name, userRole,password, email );
		status = mc.addNewUser(u);
		System.out.println(" name "+ u.getName());
		assertEquals(name, u.getName());
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
		//AllSubmissionResponse users = mc.allSubmissionsByCourse("DM5500", 2);	
	}
	
	@Test()
	public void test6(){ 
		String codename = "CS5500";
	//	AllSubmissionResponse users = mc.allSubmissionsByCourse(codename, 1);	
		//System.out.println( "CODE "+ users.getStatus().getStatusCode());
	}
	
	
	
}
