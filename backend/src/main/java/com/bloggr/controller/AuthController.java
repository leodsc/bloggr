package com.bloggr.controller;

import com.bloggr.model.UserLogin;
import com.bloggr.model.UserModel;
import com.bloggr.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.Optional;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<UserModel> login(@RequestBody UserLogin user) {
        Optional<UserModel> result = authService.login(user);
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            HttpHeaders headers = new HttpHeaders();
            headers.setBasicAuth(user.getEmail(), user.getPassword());
            System.out.println(result.get().getBirthday());
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
