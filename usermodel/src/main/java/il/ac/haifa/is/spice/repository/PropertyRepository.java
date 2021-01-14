package il.ac.haifa.is.spice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import il.ac.haifa.is.spice.model.Property;


@Repository
public interface PropertyRepository extends JpaRepository<Property, String>{

	 List<Property> findByUserid(String userid);


//	@Query(value="SELECT * FROM propertys WHERE userid= :uid AND property_name= ?2", nativeQuery=true)
	@Query(value="SELECT p FROM Property p WHERE p.userid = :uid AND p.pname = :propname ", nativeQuery=false)
	Optional<Property> findByUseridAndPname(@Param("uid") String userid, @Param("propname") String pname);


	List<Property> findByPname(String pname);

}
