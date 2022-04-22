package com.bloggr.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Data
@Entity(name="user")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(min=2, max=40)
    @NotNull
    private String name;

    @Temporal(TemporalType.DATE)
    @NotNull
    private Date birthday;

    @Size(min=8, max=100)
    @NotNull
    private String password;

    @Email
    @NotNull
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties(value="user")
    private List<PostModel> posts;
}
