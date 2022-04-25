package com.bloggr.controller;

import com.bloggr.model.UserLogin;
import com.bloggr.model.UserModel;
import com.bloggr.repository.UserRepository;
import com.bloggr.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins="${app.frontend.origin}", allowedHeaders="*", exposedHeaders="Authorization")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/teste")
    public List<UserModel> getAll() {
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<UserModel> login(@RequestBody UserLogin user) {
        Optional<UserModel> result = authService.login(user);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            HttpHeaders headers = new HttpHeaders();
            headers.setBasicAuth(user.getEmail(), user.getPassword());
            return ResponseEntity.ok().headers(headers).body(result.get());
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<UserModel> signup(@Valid @RequestBody UserModel user) {
        Optional<UserModel> result = authService.signup(user);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        } else {
            return ResponseEntity.ok(user);
        }
    }
}
