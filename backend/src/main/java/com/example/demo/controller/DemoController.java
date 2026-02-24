package com.example.demo.controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // React Vite default port
public class DemoController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from Spring Boot");
        return response;
    }

    @PostMapping("/echo")
    public Map<String, String> echo(@RequestBody Map<String, String> request) {
        Map<String, String> response = new HashMap<>();
        response.put("received", request.get("text"));
        response.put("status", "SUCCESS");
        return response;
    }
}