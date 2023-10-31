package com.openclassrooms.mddapi.service;



import com.openclassrooms.mddapi.exception.UserNotFoundException;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.payload.request.UpdateUserRequest;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.payload.response.PostResponse;
import com.openclassrooms.mddapi.payload.response.PostsResponse;
import com.openclassrooms.mddapi.payload.response.UserResponse;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.utils.DateUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Service class responsible for user-related operations.
 * <p>
 * Created by Jérémy MULET on 20/10/2023.
 */
@Service
@RequiredArgsConstructor
public class UserService  implements UserDetailsService {

    private final UserRepository userRepository;

    /**
     * Retrieve a user by its ID and convert it to a UserResponse DTO.
     *
     * @param id the ID of the user to retrieve.
     * @return a UserResponse DTO representing the user.
     * @throws UserNotFoundException if no user is found for the given ID.
     */
    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User with ID " + id + " not found"));
        return UserResponse.builder()
                .userName(user.getUsername())
                .email(user.getEmail())
                .id(id)
                .build();
    }

    public  ResponseEntity<MessageResponse> updateUserById(Long id, UpdateUserRequest request) {
        return userRepository.findById(id).map(user -> {
            if (request.getEmail() != null) {
                user.setEmail(request.getEmail());
            }
            if (request.getUsername() != null) {
                user.setName(request.getUsername());
            }
            userRepository.save(user);
            return ResponseEntity.ok(MessageResponse.builder().message("Profile mis à jour!").build());
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + username));
        return  User.builder()
                .id(user.getId())
                .email(user.getEmail())
                .password(user.getPassword())
                .name(user.getName())
                .build();
    }

    public PostsResponse getPostsByUser(Long userId) {
        User user = userRepository.getReferenceById(userId);
        Set<Topic> subscribedTopics = user.getSubscribedTopics();
        ArrayList<PostResponse> userSubscribedPosts = new ArrayList<>();

        for (Topic topic : subscribedTopics) {
            List<Post> postsInTopic = topic.getPosts();
            for (Post post : postsInTopic) {
                userSubscribedPosts.add(
                        PostResponse.builder()
                                .id(post.getId())
                                .title(post.getTitle())
                                .content(post.getContent())
                                .topic(post.getTopic().getName())
                                .author(post.getAuthor().getName())
                                .date(DateUtils.format(post.getUpdatedAt()))
                                .build()
                );
            }
        }
        return PostsResponse.builder().posts(userSubscribedPosts).build();
    }

}
