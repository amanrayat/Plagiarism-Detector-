package com.team208.domain;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

@Transactional
public interface AssignmentRepository extends CrudRepository<AssignmentEntity, Integer> {
	
	@Query("SELECT s FROM AssignmentEntity s WHERE s.assignmentId=:assignmentId ")
	 AssignmentEntity findById(@Param("assignmentId") int assignmentId);
	
	
	@Query("SELECT a FROM AssignmentEntity a inner join a.assignmentCourse c WHERE a.assignmentNo=:assignment_no and c.courseId =:course_id ")
	 AssignmentEntity findByNoAndCourse(@Param("assignment_no") int assignmentNo, @Param("course_id") int courseId) ;
	
	
}
