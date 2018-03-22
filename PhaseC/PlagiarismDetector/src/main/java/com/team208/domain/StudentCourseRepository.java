package com.team208.domain;


//import java.util.Optional;

//import org.hibernate.Criteria;
//import org.hibernate.Session;
//import org.hibernate.SessionFactory;
//import org.hibernate.criterion.Restrictions;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface  StudentCourseRepository extends CrudRepository<StudentCourseEntity, Integer>  {

//	@Autowired
//	private SessionFactory sessionFactory;
	
	



//	public StudentCourseEntity findById(int id) {
//		
//		Session session = null;
//		CourseEntity n = null;
//		Criteria criteria = null;
//		int size = 0;
//		try{
//			session = this.sessionFactory.getCurrentSession();
//			criteria = session.createCriteria(CourseEntity.class, "ce");
//			criteria.add(Restrictions.eq("ce.getCourseId", id));
//			size = criteria.list().size();
//			if(size>0 ) {
//				n = new CourseEntity();
//				n.setCourseAbbr();
//			}
//			
//		}catch(Exception e){
//			e.printStackTrace();
//		}
//		return null;
//	}

	
}

