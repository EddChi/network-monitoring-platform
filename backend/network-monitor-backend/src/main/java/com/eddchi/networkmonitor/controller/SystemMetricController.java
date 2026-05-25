package com.eddchi.networkmonitor.controller;

import com.eddchi.networkmonitor.model.SystemMetric;
import com.eddchi.networkmonitor.service.SystemMetricService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/metrics")
@RequiredArgsConstructor
public class SystemMetricController {

    private final SystemMetricService systemMetricService;

    @PostMapping("/agent/{agentId}")
    public SystemMetric recordMetric(
            @PathVariable Long agentId,
            @RequestBody SystemMetric metric) {

        return systemMetricService.recordMetric(agentId, metric);
    }

    @GetMapping("/agent/{agentId}")
    public List<SystemMetric> getMetricsByAgentId(
            @PathVariable Long agentId) {

        return systemMetricService.getMetricsByAgentId(agentId);
    }
}