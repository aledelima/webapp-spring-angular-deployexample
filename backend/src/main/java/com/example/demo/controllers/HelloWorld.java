package com.example.demo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class HelloWorld {

    @GetMapping("/greet")
    public ResponseEntity<String> sayHello() {
        return ResponseEntity.status(HttpStatus.OK)
               .header("Content-Type", "text/plain")
               .body("Hello World from the backend for Victor Almada!");
    }
}

