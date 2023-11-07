package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.payload.response.PostResponse;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.utils.DateUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


/**
 * Created by Jérémy MULET on 31/10/2023.
 */
@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final TopicRepository topicRepository;

    public PostResponse getPostById(Long id) {
        var post = postRepository.getReferenceById(id);
        return PostResponse.builder()
                .title(post.getTitle())
                .content(post.getContent())
                .topic(post.getTopic().getName())
                .id(post.getId())
                .author(post.getAuthor().getName())
                .date(DateUtils.format(post.getUpdatedAt()))
                .build();
    }

//    public Boolean creatPost(PostRequest request) {
//        LocalDateTime date = LocalDateTime.now();
//        Post post = Post.builder()
//                .title(request.getTitle())
//                .content(request.getContent())
//                .topic(topicRepository.getReferenceById(request.getTopicId()))
//                .author(userRepository.getReferenceById(request.getUserId()))
//                .createdAt(date)
//                .updatedAt(date)
//                .build();
//        postRepository.save(post);
//    }
}
