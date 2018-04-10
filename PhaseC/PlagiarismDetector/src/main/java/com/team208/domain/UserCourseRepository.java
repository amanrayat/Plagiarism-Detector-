package com.team208.domain;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;



@Transactional
public interface UserCourseRepository extends CrudRepository<UserCourseEntity, Integer> {
	
	@Query("SELECT uc FROM UserCourseEntity uc where userdbid = ?1 ")
	Iterable<UserCourseEntity> findCourseById( int userId);

	@Query("SELECT uc FROM UserCourseEntity uc  inner join uc.user u  inner join uc.course c where u.userDBid = ?1  and c.courseId = ?2 ")
	UserCourseEntity findCourseTodrop( int userDBid,  int courseId);
}

