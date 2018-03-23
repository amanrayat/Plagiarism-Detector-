package com.team208.domain;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


//This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
//CRUD refers Create, Read, Update, Delete
@Transactional
public interface StudentRepository extends CrudRepository<StudentEntity, Integer>  {

	 @Query("SELECT s FROM StudentEntity s WHERE s.studentId=:student_id ")
	 StudentEntity findByNEUId(@Param("student_id") Long userId);
}
