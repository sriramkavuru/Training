package com.QuizApp.Quiz.Repository;

import com.QuizApp.Quiz.Model.Quiz;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuizRepository extends MongoRepository<Quiz, String> {
}
