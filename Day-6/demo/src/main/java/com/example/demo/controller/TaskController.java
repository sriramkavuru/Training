package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
public class TaskController {

    @GetMapping
    public String getTasks(@RequestParam("count") int count) {
        System.out.println("inside get tasks");
        return "Received count: " + count;
    }

    @GetMapping("/{taskId}")
    public String getTasksById(@PathVariable("taskId") int tId) {
        System.out.println("inside get tasks with Id");
        return "Task ID: " + tId;
    }

    @PostMapping
    public String postTasks() {
        System.out.println("inside post tasks");
        return "Task posted successfully";
    }

    @PutMapping
    public String putTasks() {
        System.out.println("inside put tasks");
        return "Tasks updated";
    }

    @PutMapping("/{taskId}")
    public String putTasksById(@PathVariable("taskId") int tId) {
        System.out.println("inside put tasks with Id");
        return "Task with ID " + tId + " updated";
    }

    @DeleteMapping
    public String delTasks() {
        System.out.println("inside delete tasks");
        return "Tasks deleted";
    }
}
