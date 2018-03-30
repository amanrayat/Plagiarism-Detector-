package controllersTest;



import org.junit.Test;

import com.team208.controllers.MainController;
import com.team208.domain.UserEntity;
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
	
	
//	@Test(expected= NullPointerException.class)
//	public void test2(){
//
//		Long userId  = (long) 1226315;
//		String password="zzeeddqq";
//		try {
//		StudentEntity  status = mc.login(userId, password);
//		}
//		catch(Exception e) {
//			e.printStackTrace();
//		}
//		
//	}
	
	@Test(expected= NullPointerException.class)
	public void test3(){ 
		UserEntity stud = new UserEntity();
		Long userId  = (long) 1226315;
		 stud = mc.findStudent(userId);
		
	}
	


}
