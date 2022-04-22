package com.bloggr.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;


@Data
@Entity(name="post")
public class PostModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=5, max=32)
    private String title;

    @NotNull
    @Size(min=32, max=10000)
    private String text;

    @Temporal(TemporalType.DATE)
    private Date date = new Date(System.currentTimeMillis());

    @NotNull
    @ManyToOne
    @JsonIgnoreProperties(value="posts")
    private UserModel user;

    @OneToMany(mappedBy = "post", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties("post")
    private List<CommentaryModel> commentary;

    @NotNull
    private boolean pinned;
}
