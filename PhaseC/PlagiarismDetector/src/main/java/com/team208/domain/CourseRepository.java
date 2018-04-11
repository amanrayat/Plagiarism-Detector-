package com.team208.domain;


import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CourseRepository extends CrudRepository<CourseEntity, Integer> {

	
	 @Query("SELECT s FROM CourseEntity s WHERE s.courseId=:course_id ")
	 CourseEntity findByCourseId(@Param("course_id") int courseId);
	 
	 
	 @Query("SELECT  max(s.courseId) FROM CourseEntity s WHERE s.courseAbbr=:courseAbbr  ")
	 Integer findByAbbr(@Param("courseAbbr") String courseAbbr);
	 
	 @Query("SELECT s FROM CourseEntity s WHERE s.courseTerm=:course_term")
	 Set<CourseEntity> findByTerm(@Param("course_term") String courseTerm);
	 
	 @Query("SELECT s.courseId FROM CourseEntity s WHERE   s.courseAbbr=:courseAbbr and s.courseTerm IN (:course_terms)")
	 List<Integer> findByTermAndAbbr(@Param("course_terms") List<String> courseTerm, @Param("courseAbbr") String courseAbbr);
	 
	 @Query("SELECT s FROM CourseEntity s WHERE s.courseAbbr=:courseAbbr")
	 Set<CourseEntity> findByMultipleCourseAbbr(@Param("courseAbbr") String courseAbbr);

}
