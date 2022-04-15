package com.bloggr.controller;

import com.bloggr.model.UserLogin;
import com.bloggr.model.UserModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @PostMapping
    public ResponseEntity<UserModel> login(@RequestBody UserLogin user) {
        return null;
    }

    @PostMapping
    public ResponseEntity<UserModel> signup(@RequestBody UserModel user) {
        return null;
    }
}
