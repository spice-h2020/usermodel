package il.ac.haifa.is.spice.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


import il.ac.haifa.is.spice.model.Configuration;


@Repository
public interface ConfigRepository extends JpaRepository<Configuration, String>{

	

	Optional<Configuration> findByPname(String pname);

	



}
