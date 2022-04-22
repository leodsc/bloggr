package com.bloggr.service;

import com.bloggr.model.UserLogin;
import com.bloggr.model.UserModel;
import com.bloggr.repository.UserRepository;
import com.bloggr.security.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Optional;
import java.util.stream.DoubleStream;

@Service
public class AuthService {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Optional<UserModel> login(UserLogin user) {
        var result = userRepository.findUserByEmail(user.getEmail());
        if (result.isPresent()) {
            boolean isPasswordEqual = passwordEncoder.matches(user.getPassword(), result.get().getPassword());
            if (isPasswordEqual) {
                userDetailsService.loadUserByUsername(user.getEmail());
                String token = createBase64Token(user);
                return result;
            }
        } else {
            return Optional.empty();
        }
        return Optional.empty();
    }

    public Optional<UserModel> signup(UserModel user) {
        Optional<UserModel> dbUser = userRepository.findUserByEmail(user.getEmail());

        if (dbUser.isPresent()) {
            return Optional.empty();
        }
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
        return Optional.of(user);
    }

    private String createBase64Token(UserLogin user) {
        String token = String.format("%s:%s", user.getEmail(), user.getPassword());
        return Base64.getEncoder().encodeToString(token.getBytes(StandardCharsets.UTF_8));
    }
}
