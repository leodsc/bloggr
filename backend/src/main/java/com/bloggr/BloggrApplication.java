package com.bloggr;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;
import java.util.List;

@SpringBootApplication
	public class BloggrApplication {

	@Value("${app.frontend.origin}")
	private String origin;

	public static void main(String[] args) {
		SpringApplication.run(BloggrApplication.class, args);
	}

//	@Bean
//	public CorsConfigurationSource corsConfigurationSource() {
//		final var source = new UrlBasedCorsConfigurationSource();
//		final var config = new CorsConfiguration();
//		config.setAllowedHeaders(List.of("*"));
//		config.setExposedHeaders(List.of("Authorization"));
//		config.setAllowedOrigins(List.of(origin));
//		config.setAllowedMethods(List.of("GET", "PUT", "POST", "DELETE"));
//
//		source.registerCorsConfiguration("/**", config);
//		return source;
//	}

}
