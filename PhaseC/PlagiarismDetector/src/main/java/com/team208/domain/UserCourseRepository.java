package com.team208.domain;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


@Transactional
public interface UserCourseRepository extends CrudRepository<UserCourseEntity, Integer> {
	
	@Query("SELECT uc FROM UserCourseEntity uc where userneu_id = ?1 ")
	Iterable<UserCourseEntity> findCourseById( int userId);

}

