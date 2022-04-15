package com.bloggr.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Date;

@Data
@Entity(name="user")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(min=2, max=40)
    @NotNull
    private String name;

    @Temporal(TemporalType.TIMESTAMP)
    @NotNull
    private Date birthday;

    @Size(min=8, max=32)
    @NotNull
    private String password;

    @Email
    @NotNull
    private String email;
}
