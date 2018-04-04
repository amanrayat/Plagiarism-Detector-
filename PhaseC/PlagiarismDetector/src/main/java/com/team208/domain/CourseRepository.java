package com.team208.domain;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CourseRepository extends CrudRepository<CourseEntity, Integer> {

	
	 @Query("SELECT s FROM CourseEntity s WHERE s.courseId=:course_id ")
	 CourseEntity findById(@Param("course_id") int courseId);
	 
	 
	 @Query("SELECT s FROM CourseEntity s WHERE s.courseAbbr=:courseAbbr")
	 CourseEntity findByAbbr(@Param("courseAbbr") String courseAbbr);
	 
}
