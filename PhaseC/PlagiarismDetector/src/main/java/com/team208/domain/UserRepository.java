package com.team208.domain;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


//This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
//CRUD refers Create, Read, Update, Delete
@Transactional
public interface UserRepository extends CrudRepository<UserEntity, Integer>  {

	 @Query("SELECT s FROM UserEntity s WHERE s.userId=:user_id ")
	 UserEntity findByNEUId(@Param("user_id") Long userId);

	 
	 @Query("SELECT s FROM UserEntity s WHERE s.userId=:userDBid ")
	 UserEntity findByStudentId(@Param("userDBid") int userId);

	 @Query("DELETE FROM UserEntity s WHERE s.userId=:user_id")
	 void deleteByNEUId(@Param("user_id") Long userId);

	 @Query("SELECT s FROM UserEntity s WHERE s.email=:email ")
	 UserEntity findByEmail(@Param("email") String email);
}
