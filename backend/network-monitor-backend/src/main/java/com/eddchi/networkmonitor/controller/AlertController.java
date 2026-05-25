package com.eddchi.networkmonitor.controller;

import com.eddchi.networkmonitor.dto.AlertResponse;
import com.eddchi.networkmonitor.model.Alert;
import com.eddchi.networkmonitor.service.AlertService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alerts")
@RequiredArgsConstructor
public class AlertController {

    private final AlertService alertService;

    @GetMapping
    public List<AlertResponse> getAllAlerts() {
        return alertService.getAllAlerts();
    }

    @GetMapping("/agent/{agentId}")
    public List<AlertResponse> getAlertsByAgentId(
            @PathVariable Long agentId) {

        return alertService.getAlertsByAgentId(agentId);
    }
}