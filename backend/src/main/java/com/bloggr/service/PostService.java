package com.bloggr.service;

import com.bloggr.model.PostModel;
import com.bloggr.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<PostModel> getAllPosts() {
        return postRepository.findAll();
    }

    public PostModel createPost(PostModel post) {
        postRepository.save(post);
        return post;
    }
}
