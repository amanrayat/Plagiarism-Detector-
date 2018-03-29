package com.team208.domain;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

@Transactional
public interface UserCourseRepository extends CrudRepository<UserCourseEntity, Integer> {

}

