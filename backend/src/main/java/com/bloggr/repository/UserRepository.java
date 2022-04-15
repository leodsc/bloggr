package com.bloggr.repository;

import com.bloggr.model.UserModel;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository {

    Optional<UserModel> findUserByEmail(String email);
}
