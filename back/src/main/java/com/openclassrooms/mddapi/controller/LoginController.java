package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.payload.request.AuthenticationRequest;
import com.openclassrooms.mddapi.payload.request.RegisterRequest;
import com.openclassrooms.mddapi.payload.response.AuthenticationResponse;
import com.openclassrooms.mddapi.payload.response.AuthenticationService;
import com.openclassrooms.mddapi.payload.response.UserResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * Created by Jérémy MULET on 20/10/2023.
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class LoginController {

    private final AuthenticationService authService;

//    @Operation(summary = "Register a new user")
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Successfully registered user", content = {
//                    @Content(mediaType = "application/json")
//            }),
//            @ApiResponse(responseCode = "400", description = "Invalid Request", content = @Content),
//    })

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

//    @Operation(summary = "Authenticate a user")
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Successfully authenticated", content = {
//                    @Content(mediaType = "application/json")
//            }),
//            @ApiResponse(responseCode = "401", description = "Unauthorized", content = @Content),
//    })
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

//    @Operation(summary = "Retrieve current authenticated user's details")
//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Successfully retrieved user details", content = {
//                    @Content(mediaType = "application/json")
//            }),
//            @ApiResponse(responseCode = "403", description = "Forbidden", content = @Content),
//    })
    @GetMapping("/me")
    public ResponseEntity<Optional<UserResponse>> me(HttpServletRequest request) {
        return ResponseEntity.ok(Optional.ofNullable(authService.currentUser(request)));
    }


}
