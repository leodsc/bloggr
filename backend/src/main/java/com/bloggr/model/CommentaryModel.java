package com.bloggr.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Entity(name="commentary")
public class CommentaryModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne
    private UserModel user;

    @NotNull
    @ManyToOne
    @JsonIgnoreProperties({ "user", "commentary" })
    private PostModel post;

    @Temporal(TemporalType.DATE)
    private Date date = new Date(System.currentTimeMillis());

    @NotNull
    private String text;
}
