package com.eddchi.networkmonitor.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

// class handles API requests
@RestController
public class HealthController {

    @GetMapping("/api/health")
    public Map<String, String> healthCheck() {

        return Map.of(
                "status", "running",
                "service", "network-monitor-backend"
        );
    }
}