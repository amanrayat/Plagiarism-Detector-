package com.team208.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface CourseRepository extends CrudRepository<CourseEntity, Integer> {

}
