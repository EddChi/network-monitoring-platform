package com.eddchi.networkmonitor.service;
import com.eddchi.networkmonitor.dto.AlertResponse;
import com.eddchi.networkmonitor.dto.AlertResponse;
import com.eddchi.networkmonitor.model.Alert;
import com.eddchi.networkmonitor.model.NetworkAgent;
import com.eddchi.networkmonitor.model.SystemMetric;
import com.eddchi.networkmonitor.repository.AlertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AlertService {

    private final AlertRepository alertRepository;

    public void evaluateMetric(NetworkAgent agent, SystemMetric metric) {

        if (metric.getCpuUsage() > 80) {
            createAlert(agent, "HIGH_CPU", "CPU usage exceeded 80%", "HIGH");
        }

        if (metric.getMemoryUsage() > 90) {
            createAlert(agent, "HIGH_MEMORY", "Memory usage exceeded 90%", "CRITICAL");
        }

        if (metric.getNetworkLatencyMs() > 100) {
            createAlert(agent, "HIGH_LATENCY", "Network latency exceeded 100ms", "MEDIUM");
        }
    }

    public Alert createAlert(NetworkAgent agent, String alertType, String message, String severity) {
        Alert alert = Alert.builder()
                .networkAgent(agent)
                .alertType(alertType)
                .message(message)
                .severity(severity)
                .build();

        return alertRepository.save(alert);
    }

    public List<AlertResponse> getAllAlerts() {

        return alertRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public List<AlertResponse> getAlertsByAgentId(Long agentId) {

        return alertRepository
                .findByNetworkAgentIdOrderByCreatedAtDesc(agentId)
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    private AlertResponse convertToResponse(Alert alert) {

        return new AlertResponse(
                alert.getId(),
                alert.getAlertType(),
                alert.getMessage(),
                alert.getSeverity(),
                alert.getCreatedAt(),
                alert.getNetworkAgent().getId(),
                alert.getNetworkAgent().getHostname(),
                alert.getNetworkAgent().getStatus()
        );
    }
}