package com.team208.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.team208.domain.UserEntity;
import com.team208.domain.UserRepository;

/**
 * 
 * @author amanrayat
 * This is a Rest controller used for mapping the requests
 */

@CrossOrigin
@RestController
@RequestMapping(path="/team208")
public class AdminController2 {

	@Autowired
	UserRepository userrepository;
	
	/**
	 * This mapping is used to add a new user
	 * @param student
	 * @return
	 */
	@PostMapping("/admin/user")
	public UserEntity createUser(@RequestBody UserEntity student) {
		return userrepository.save(student);
	}
	
	/**
	 * This mapping is used to find all the users 
	 * @return
	 */
	@GetMapping("/admin/user")
	public List<UserEntity> findAllUsers(){
		return (List<UserEntity>) userrepository.findAll();
	}
	
	/**
	 * This mapping is used to update the user. 
	 * We can pass any or all of the parameters 
	 * Only the changed parameter will be updated.
	 * @param UserId
	 * @param newUser
	 * @return
	 */
	@PutMapping("/admin/user/{userId}")
	public UserEntity updateUserById(@PathVariable ("userId") long userId, @RequestBody UserEntity newUser ) {
		UserEntity student = userrepository.findByNEUId(userId);
		student.set(newUser);
		return userrepository.save(student);
	}
	
	/**
	 * This mapping deletes the user with the given userId 
	 * @param UserId
	 */
	@DeleteMapping("/admin/user/{userId}")
	public void deleteUserById(@PathVariable ("userId") long userId) {
		int dbId = userrepository.findByNEUId(userId).getUserDBid();
		userrepository.deleteById(dbId);
	}

	
}

