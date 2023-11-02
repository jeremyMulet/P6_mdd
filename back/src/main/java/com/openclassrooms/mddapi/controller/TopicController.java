package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.payload.response.TopicResponse;
import com.openclassrooms.mddapi.service.TopicService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


/**
 * Created by Jérémy MULET on 30/10/2023.
 */
@RestController
@RequestMapping("/api/topic")
@RequiredArgsConstructor
public class TopicController {

    private final TopicService topicService;

    @GetMapping("")
    public ResponseEntity<ArrayList<TopicResponse>> getTopics() {
        return ResponseEntity.ok(topicService.getAllTopics());
    }
}
