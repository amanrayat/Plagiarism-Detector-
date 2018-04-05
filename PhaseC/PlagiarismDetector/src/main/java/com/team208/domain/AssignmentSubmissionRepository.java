package com.team208.domain;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

@Transactional
public interface AssignmentSubmissionRepository extends CrudRepository<AssignmentSubmissionEntity, Integer> {
	
	 @Query("SELECT s FROM AssignmentSubmissionEntity s WHERE s.submissionId=:submission_id ")
	 AssignmentSubmissionEntity findById(@Param("submission_id") int submissionId);
	 
	 @Query("SELECT sub, s  FROM AssignmentSubmissionEntity sub inner join sub.assignmentId a inner join sub.student s WHERE a.assignmentId=:assignment_id ")
	 Set<AssignmentSubmissionEntity> findSubmissionByAssignmentId(@Param("assignment_id") int assignmentId);

}
