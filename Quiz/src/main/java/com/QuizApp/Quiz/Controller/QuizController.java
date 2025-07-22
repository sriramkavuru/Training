package com.QuizApp.Quiz.Controller;

import com.QuizApp.Quiz.Model.Quiz;
import com.QuizApp.Quiz.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "http://localhost:3000") 
public class QuizController {

    @Autowired
    private QuizRepository quizRepo;

    @PostMapping("/create")
    public String createQuiz(@RequestBody Quiz quiz) {
        quizRepo.save(quiz);
        return "Quiz Created Successfully";
    }

    @GetMapping("/all")
    public List<Quiz> getAllQuizzes() {
        return quizRepo.findAll();
    }

    @GetMapping("/{id}")
    public Quiz getQuizById(@PathVariable String id) {
        return quizRepo.findById(id).orElse(null);
    }
}
