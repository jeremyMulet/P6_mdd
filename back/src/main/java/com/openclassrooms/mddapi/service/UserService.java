package com.openclassrooms.mddapi.service;



import com.openclassrooms.mddapi.exception.UserNotFoundException;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.payload.response.UserResponse;
import com.openclassrooms.mddapi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Service class responsible for user-related operations.
 * <p>
 * Created by Jérémy MULET on 20/10/2023.
 */
@Service
@RequiredArgsConstructor
public class UserService  implements UserDetailsService {

    private final UserRepository userRepository;

//    /**
//     * Retrieve a user by its ID and convert it to a UserResponse DTO.
//     *
//     * @param id the ID of the user to retrieve.
//     * @return a UserResponse DTO representing the user.
//     * @throws UserNotFoundException if no user is found for the given ID.
//     */
//    public UserResponse getUserById(Integer id) {
//        User user = userRepository.getReferenceById(id)
//                .orElseThrow(() -> new UserNotFoundException("User with ID " + id + " not found"));
//        return UserResponse.builder()
//                .userName(user.getUsername())
//                .email(user.getEmail())
//                .id(id)
//                .build();
//    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + username));
        return  User.builder()
                .id(user.getId())
                .email(user.getEmail())
                .password(user.getPassword())
                .username(user.getUsername())
                .build();
    }
}
