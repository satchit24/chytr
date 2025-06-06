package com.chytr.chytr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.chytr.chytr.repository.postgres")
public class ChytrApplication {
	public static void main(String[] args) {
		SpringApplication.run(ChytrApplication.class, args);
	}
}
