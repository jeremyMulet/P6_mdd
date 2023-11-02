package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.payload.response.TopicResponse;
import com.openclassrooms.mddapi.repository.TopicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * Created by Jérémy MULET on 30/10/2023.
 */
@Service
@RequiredArgsConstructor
public class TopicService {

    private final TopicRepository topicRepository;

    public ArrayList<TopicResponse> getAllTopics() {
        var topics = topicRepository.findAll();
        ArrayList<TopicResponse> response = new ArrayList<>();

        topics.forEach(topic -> {
            TopicResponse topicResponse = TopicResponse.builder()
                    .id(topic.getId())
                    .name(topic.getName())
                    .description(topic.getDescription())
                    .build();
            response.add(topicResponse);
        });
        return response;
    }
}
