package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.payload.request.UpdateUserRequest;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.payload.response.PostResponse;
import com.openclassrooms.mddapi.payload.response.TopicResponse;
import com.openclassrooms.mddapi.payload.response.UserResponse;
import com.openclassrooms.mddapi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


/**
 * Created by Jérémy MULET on 29/10/2023.
 */

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MessageResponse> updateUser(@PathVariable Long id, @RequestBody UpdateUserRequest request) {
        return userService.updateUserById(id, request);
    }

    @GetMapping("/{id}/subscribed-topics")
    public ResponseEntity<ArrayList<TopicResponse>> getUserSubscribedTopics(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getTopicsByUser(id));
    }
    @GetMapping("/{id}/subscribed-posts")
    public ResponseEntity<ArrayList<PostResponse>> getUserSubscribedPosts(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getPostsByUser(id));
    }
}
