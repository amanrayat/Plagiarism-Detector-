package com.team208.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;





@Entity
@Table(name = "user")
public class UserEntity implements Serializable{


	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;



	private int userDBid; 

	private Long userId;


	private String name;


	private String userRole;


	private String password;


	private String email;


	private Set<UserCourseEntity> usercourse = new HashSet<>();



	public UserEntity(Long userId, String name, String userRole, String password, String email
			) {
		super();
		this.userId = userId;
		this.name = name;
		this.userRole = userRole;
		this.password = password;
		this.email = email;

	}


	public UserEntity(Set<UserCourseEntity> usercourse) {
		super();
		this.usercourse = usercourse;
	}

	public UserEntity() {
		super();
	}


	@OneToMany( mappedBy = "user",  fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE  }, orphanRemoval = true)
	public Set<UserCourseEntity> getUsercourse() {
		return usercourse;
	}



	public void setUsercourse(Set<UserCourseEntity> usercourse) {
		this.usercourse = usercourse;
	}


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getUserDBid() {
		return userDBid;
	}







	public void setUserDBid(int userDBid) {
		this.userDBid = userDBid;
	}

	@Column(name = "userneu_id", nullable = false)
	public Long getUserId() {
		return userId;
	}



	public void setUserId(Long userId) {
		this.userId = userId;
	}


	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "userRole", nullable = false)
	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
