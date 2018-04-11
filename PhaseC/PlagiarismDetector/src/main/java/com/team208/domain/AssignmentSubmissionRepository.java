package com.team208.domain;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

@Transactional
public interface AssignmentSubmissionRepository extends CrudRepository<AssignmentSubmissionEntity, Integer> {
	
	 @Query("SELECT s FROM AssignmentSubmissionEntity s WHERE s.submissionId=:submission_id ")
	 AssignmentSubmissionEntity findById(@Param("submission_id") int submissionId);
	 
	 @Query("SELECT sub, s  FROM AssignmentSubmissionEntity sub  inner join sub.student s "
	 		+ "WHERE (s.userDBid,sub.timestamp) IN "
	 		+ " (select s1.userDBid as uid, MAX(timestamp) as mts  FROM AssignmentSubmissionEntity sub1 "
	 		+ "inner join sub1.assignmentId a inner join sub1.student s1 WHERE a.assignmentId=:assignment_id "
	 		+ "GROUP BY s1.userDBid) ")
	 Set<AssignmentSubmissionEntity> findSubmissionByAssignmentId(@Param("assignment_id") int assignmentId);

	 
	 @Query("SELECT sub, s  FROM AssignmentSubmissionEntity sub  inner join sub.student s "
		 		+ "WHERE (s.userDBid,sub.timestamp) IN "
		 		+ " (select s1.userDBid as uid, MAX(timestamp) as mts  FROM AssignmentSubmissionEntity sub1 "
		 		+ "inner join sub1.assignmentId a inner join sub1.student s1 WHERE a.assignmentId IN (:assignment_ids) "
		 		+ "GROUP BY s1.userDBid) ")
		 Set<AssignmentSubmissionEntity> findSubmissionByMultpileAssignmentIds(@Param("assignment_ids") List<Integer> assignmentIds);
	 
}
