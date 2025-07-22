package com.QuizApp.Quiz.Controller;

import com.QuizApp.Quiz.Model.User;
import com.QuizApp.Quiz.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        if (userRepo.existsByUsernameAndRole(user.getUsername(), user.getRole())) {
            return ResponseEntity.badRequest().body("User already exists");
        }
        userRepo.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginUser) {
        User user = userRepo.findByUsernameAndRole(loginUser.getUsername(), loginUser.getRole());
        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
