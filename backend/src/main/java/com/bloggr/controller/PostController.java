package com.bloggr.controller;

import com.bloggr.model.PostModel;
import com.bloggr.service.PostService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/post")
//@CrossOrigin(origins="${app.frontend.origin}", allowedHeaders="*", exposedHeaders="Authorization")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<List<PostModel>> getAll() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    @PostMapping("/create")
    public ResponseEntity<PostModel> createPost(@RequestBody @Valid PostModel post) {
        return ResponseEntity.ok(postService.createPost(post));
    }
}
