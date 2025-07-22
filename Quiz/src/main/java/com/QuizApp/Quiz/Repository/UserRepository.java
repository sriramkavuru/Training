package com.QuizApp.Quiz.Repository;

import com.QuizApp.Quiz.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
    User findByUsernameAndRole(String username, String role);
    boolean existsByUsernameAndRole(String username, String role);
}
