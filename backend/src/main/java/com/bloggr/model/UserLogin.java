package com.bloggr.model;

import lombok.Getter;

@Getter
public class UserLogin {

    private final String email;
    private final String password;

    UserLogin(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
