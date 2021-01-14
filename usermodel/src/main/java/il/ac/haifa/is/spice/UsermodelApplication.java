package il.ac.haifa.is.spice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class UsermodelApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsermodelApplication.class, args);
	}

}
