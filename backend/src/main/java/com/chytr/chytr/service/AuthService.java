package com.chytr.chytr.service;

import com.chytr.chytr.dto.auth.AuthResponse;
import com.chytr.chytr.dto.auth.LoginRequest;
import com.chytr.chytr.dto.auth.RegisterRequest;
import com.chytr.chytr.model.postgres.User;
import com.chytr.chytr.repository.postgres.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthResponse register(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role("USER")
                .build();

        userRepository.save(user);

        String token = jwtService.generateToken(user.getUsername());
        return AuthResponse.builder().token(token).build();
    }

    public AuthResponse authenticate(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));
        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getUsername());
        return AuthResponse.builder().token(token).build();
    }
}